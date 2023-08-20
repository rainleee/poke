import { useState } from "react";

import { usePokemonListLazyQuery } from "@/gql/poke/pokemonList.graphql";
import { useStore } from "@/store";

import { PokemonListStaticInput } from "./types";

const usePokemonSpeciesStates = () => {
  const [getPokemonList] = usePokemonListLazyQuery();
  const { pokemonStore } = useStore();
  const { setSpeciesList, speciesList } = pokemonStore;
  const KOREAN_LANGUAGE_AND_DISTINCT_ON_INPUT: PokemonListStaticInput = {
    where: {
      language_id: {
        _eq: 3,
      },
    },
    pokemonV2TypenamesAggregateWhere2: {
      language_id: {
        _eq: 3,
      },
    },
    pokemonV2PokemonsDistinctOn2: "pokemon_species_id",
  };

  const [offset, setOffset] = useState(0);
  const [limit] = useState(50);
  const [isFetching, setFetching] = useState(false);
  const [hasNextPage, setNextPage] = useState(true);

  const setter = {
    setSpeciesList,
    setOffset,
    setFetching,
    setNextPage,
  };
  const getter = {
    getPokemonList,
    speciesList,
    KOREAN_LANGUAGE_AND_DISTINCT_ON_INPUT,
    offset,
    limit,
    isFetching,
    hasNextPage,
  };

  return { ...setter, ...getter };
};

export default usePokemonSpeciesStates;
