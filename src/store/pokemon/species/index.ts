import { StateCreator } from "zustand";

import { PokemonSpeciesSlice } from "./types";
import { pokemonStates } from "./states";

export const createPokemonSlice: StateCreator<PokemonSpeciesSlice> = (set) => ({
  ...pokemonStates,
  setSpeciesList: (speciesList) => set({ speciesList }), //TODO: change
});
