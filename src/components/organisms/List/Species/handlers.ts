import { States } from "./type";

const usePokemonSpeciesHandlers = (states: States) => {
  const { getPokemonList, setSpeciesList } = states;

  const handlePokemonList = async () => {
    const { data } = await getPokemonList({
      variables: {
        limit: 50,
        offset: 0,
        orderBy: { pokemon_id: "asc" },
        where: {
          language_id: {
            _eq: 3,
          },
        },
        pokemonV2PokemonspeciesnamesAggregateWhere2: {
          language_id: {
            _eq: 3,
          },
        },
        pokemonV2TypenamesAggregateWhere2: {
          language_id: {
            _eq: 3,
          },
        },
      }, //TODO: query param으로 변경
    });

    const pokemonDataList = data?.pokemon_v2_pokemonsprites.map((sprite) => {
      //TODO: 이미지가 null일 경우는 어떻게..?
      const image = JSON.parse(sprite.sprites)["front_default"]
        ? JSON.parse(sprite.sprites)["front_default"]
        : JSON.parse(sprite.sprites)["other"]["official-artwork"][
            "front_default"
          ];
      const types: string[] = [];

      const flavorText = flattenNodes(
        sprite.pokemon_v2_pokemon?.pokemon_v2_pokemonspecy
          ?.pokemon_v2_pokemonspeciesflavortexts_aggregate.nodes
      )["flavor_text"];

      const speciesNames = flattenNodes(
        sprite.pokemon_v2_pokemon?.pokemon_v2_pokemonspecy
          ?.pokemon_v2_pokemonspeciesnames_aggregate.nodes
      );

      sprite.pokemon_v2_pokemon?.pokemon_v2_pokemontypes.forEach((type) => {
        types.push(
          flattenNodes(
            type.pokemon_v2_type?.pokemon_v2_typenames_aggregate.nodes
          )["name"]
        );
      });

      //TODO: 상세 data 이관
      //weight
      // height
      // flavorText
      return {
        id: sprite.pokemon_id,
        weight: sprite.pokemon_v2_pokemon?.weight
          ? `${sprite.pokemon_v2_pokemon?.weight / 10}kg`
          : "알수없음",
        height: sprite.pokemon_v2_pokemon?.height
          ? `${sprite.pokemon_v2_pokemon?.height / 10}m`
          : "알수없음",
        name: speciesNames.name,
        genus: speciesNames.genus,
        flavorText,
        types: [...types],
        image: image.replace("/media", ""),
      };
    });

    setSpeciesList(pokemonDataList); //TODO: 최종 버전때 타입 다시 수정하기
  };

  const flattenNodes = (nodes: any) => {
    const flattenedData = {} as any;

    nodes.forEach((node: any) => {
      for (const key in node) {
        if (typeof node[key] === "object" && node[key] !== null) {
          if (Array.isArray(node[key])) {
            flattenedData[key] = flattenedData[key] || [];
            flattenedData[key].push(...node[key]);
          } else {
            const nestedKeys = Object.keys(node[key]);
            nestedKeys.forEach((nestedKey) => {
              flattenedData[nestedKey] = node[key][nestedKey];
            });
          }
        } else {
          flattenedData[key] = node[key];
        }
      }
    });

    return flattenedData;
  };

  return { handlePokemonList } as const;
};

export default usePokemonSpeciesHandlers;
