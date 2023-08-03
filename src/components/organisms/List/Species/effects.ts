import { useEffect } from "react";

import { Params } from "./type";

const usePokemonSpeciesEffects = (params: Params) => {
  const { handlePokemonList, setSpeciesList } = params;

  //TODO: useCallback
  const usePokemonListEffect = () => {
    useEffect(() => {
      handlePokemonList();
    }, [setSpeciesList]); // TODO: 디펜더시 추가
  };

  return { usePokemonListEffect } as const;
};

export default usePokemonSpeciesEffects;
