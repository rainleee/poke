import { PokemonListQuery } from "@/gql/poke/pokemonList.graphql";
import { InferArray } from "@/types";

export type NonNullablePokemonListQuery = InferArray<
  NonNullable<PokemonListQuery["pokemon_v2_pokemon"]>
>;

export type PokemonSpeciesNodes = NonNullable<
  NonNullablePokemonListQuery["pokemon_v2_pokemonspecy"]
>["pokemon_v2_pokemonspeciesnames_aggregate"]["nodes"];

export interface PokemonSpeciesStates {
  speciesList: PokemonSpeciesNodes;
}

export interface PokemonSpeciesStatesActions {
  setSpeciesList: (speciesList: any) => void; //TODO: type change
  // setSpeciesList: (speciesList: PokemonSpeciesNodes) => void;
}

export type States = PokemonSpeciesStates;
export type Actions = PokemonSpeciesStatesActions;

export type PokemonSpeciesSlice = States & Actions;
