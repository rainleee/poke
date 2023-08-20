import { useCallback } from "react";

import { States } from "./types";

const usePokemonSpeciesHandlers = (states: States) => {
  const {
    getPokemonList,
    setSpeciesList,
    speciesList,
    KOREAN_LANGUAGE_AND_DISTINCT_ON_INPUT,
    offset,
    setOffset,
    limit,
    setFetching,
    setNextPage,
  } = states;

  const handlePokemonList = useCallback(async () => {
    try {
      const { data } = await getPokemonList({
        variables: {
          ...KOREAN_LANGUAGE_AND_DISTINCT_ON_INPUT,
          offset,
          limit,
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
        setOffset(speciesList.length + limit);
        setFetching(false);
        setNextPage(species.nodes.length === limit);
        setSpeciesList(speciesList.concat(pokemonDataList)); //TODO: 최종 버전때 타입 다시 수정하기
      }
    } catch (error) {
      //TODO: error 처리
      console.error(error);
    }
  }, [offset]);

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
