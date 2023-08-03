import usePokemonSpeciesHandlers from "./handlers";
import usePokemonSpeciesStates from "./states";

export type States = ReturnType<typeof usePokemonSpeciesStates>;
export type Params = ReturnType<typeof usePokemonSpeciesStates> &
  ReturnType<typeof usePokemonSpeciesHandlers>;
