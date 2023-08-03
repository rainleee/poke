import { create } from "zustand";

import { createPokemonSlice } from "./species";
import { PokemonSpeciesSlice } from "./species/types";

type PokemonStore = PokemonSpeciesSlice;

export const usePokemonStore = create<PokemonStore>()((...a) => ({
  ...createPokemonSlice(...a),
}));
