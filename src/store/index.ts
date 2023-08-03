import { usePokemonStore } from "./pokemon";

export const useStore = () => ({
  pokemonStore: usePokemonStore(),
});
