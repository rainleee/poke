import { States } from "./type";

const usePokemonSpeciesHandlers = (states: States) => {
  const { getPokemonList, setSpeciesList } = states;

  const handlePokemonList = async () => {
    const { data } = await getPokemonList({
      variables: {
        where: {
          language_id: {
            _eq: 3,
          },
          pokemon_v2_pokemonspecy: {},
        },
        offset: 0,
        limit: 50,
        pokemonV2TypenamesAggregateWhere2: {
          language_id: {
            _eq: 3,
          },
        },
        pokemonV2PokemonsDistinctOn2: "pokemon_species_id",
      },
    });

    if (data) {
      const species = data?.pokemon_v2_pokemonspeciesname_aggregate;

      const pokemonDataList = species.nodes.map((node) => {
        const types: string[] = [];
        let image = "";

        node.pokemon_v2_pokemonspecy?.pokemon_v2_pokemons.forEach((v) => {
          v.pokemon_v2_pokemonsprites.forEach((sprite) => {
            image = JSON.parse(sprite.sprites)["front_default"]
              ? JSON.parse(sprite.sprites)["front_default"]
              : JSON.parse(sprite.sprites)["other"]["official-artwork"][
                  "front_default"
                ];
          });

          v.pokemon_v2_pokemontypes.map((node) => {
            const pokemonType = flattenNodes(
              node.pokemon_v2_type?.pokemon_v2_typenames_aggregate.nodes
            )["name"];
            types.push(pokemonType);
          });
        });

        return {
          id: node.pokemon_species_id,
          name: node.name,
          genus: node.genus,
          types: [...types],
          image: image.replace("/media", ""),
        };
      });

      setSpeciesList(pokemonDataList); //TODO: 최종 버전때 타입 다시 수정하기
    }
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
