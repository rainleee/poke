import { usePokemonListLazyQuery } from "@/gql/poke/pokemonList.graphql";
import { useStore } from "@/store";

const usePokemonSpeciesStates = () => {
  const [getPokemonList] = usePokemonListLazyQuery();
  const { pokemonStore } = useStore();
  const { setSpeciesList, speciesList } = pokemonStore;

  const setter = { setSpeciesList };
  const getter = { getPokemonList, speciesList };

  return { ...setter, ...getter };
};

export default usePokemonSpeciesStates;
