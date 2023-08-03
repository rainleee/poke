import { States } from "./type";

const usePokemonSpeciesHandlers = (states: States) => {
  const { getPokemonList, setSpeciesList } = states;

  const handlePokemonList = async () => {
    const KOR_LANGUAGE_ID = 3;
    const { data } = await getPokemonList({
      variables: { limit: 50, offset: 0, orderBy: { pokemon_id: "asc" } }, //TODO: query param으로 변경
    });

    const pokemonDataList = data?.pokemon_v2_pokemonsprites.map((sprite) => {
      //TODO: 이미지가 null일 경우는 어떻게..?
      const image = JSON.parse(sprite.sprites)["front_default"]
        ? JSON.parse(sprite.sprites)["front_default"]
        : JSON.parse(sprite.sprites)["other"]["official-artwork"][
            "front_default"
          ];

      const info =
        sprite.pokemon_v2_pokemon?.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesnames_aggregate.nodes.filter(
          (node) => node.language_id === KOR_LANGUAGE_ID
        )[0];

      return {
        ...info,
        image: image.replace("/media", ""),
      };
    });

    setSpeciesList(pokemonDataList); //TODO: 최종 버전때 타입 다시 수정하기
  };

  return { handlePokemonList } as const;
};

export default usePokemonSpeciesHandlers;
