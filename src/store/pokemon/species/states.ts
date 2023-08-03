import { PokemonSpeciesStates, States } from "./types";

const pokemonSpeciesStates: PokemonSpeciesStates = {
  speciesList: [],
};

export const pokemonStates: States = {
  ...pokemonSpeciesStates,
};
