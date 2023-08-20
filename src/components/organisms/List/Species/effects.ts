import { useEffect } from "react";

import { throttle } from "@/utils/throttle";

import { Params } from "./types";

const usePokemonSpeciesEffects = (params: Params) => {
  const {
    handlePokemonList,
    setSpeciesList,
    setFetching,
    isFetching,
    hasNextPage,
  } = params;

  //TODO: useCallback
  const usePokemonListEffect = () => {
    useEffect(() => {
      handlePokemonList();
    }, [setSpeciesList]); // TODO: 디펜더시 추가
  };

  const useInfiniteScrollEffect = () => {
    useEffect(() => {
      const handleScroll = throttle(() => {
        const { scrollTop, offsetHeight } = document.documentElement;
        if (window.innerHeight + scrollTop >= offsetHeight) {
          setFetching(true);
        }
      });

      setFetching(true);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      if (isFetching && hasNextPage) handlePokemonList();
      else if (!hasNextPage) setFetching(false);
    }, [isFetching]);
  };

  return { usePokemonListEffect, useInfiniteScrollEffect } as const;
};

export default usePokemonSpeciesEffects;
