import { PokemonListQueryVariables } from "@/gql/poke/pokemonList.graphql";

import usePokemonSpeciesHandlers from "./handlers";
import usePokemonSpeciesStates from "./states";

export type States = ReturnType<typeof usePokemonSpeciesStates>;
export type Params = ReturnType<typeof usePokemonSpeciesStates> &
  ReturnType<typeof usePokemonSpeciesHandlers>;

export type PokemonListStaticInput = Pick<
  PokemonListQueryVariables,
  "where" | "pokemonV2PokemonsDistinctOn2" | "pokemonV2TypenamesAggregateWhere2"
>;
