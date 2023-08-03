import React from "react";

import usePokemonSpeciesStates from "./states";
import usePokemonSpeciesHandlers from "./handlers";
import usePokemonSpeciesEffects from "./effects";
import { SpeciesContainer, SpeciesWrapper } from "./styles";

const PokemonSpecies = () => {
  const states = usePokemonSpeciesStates();
  const handlers = usePokemonSpeciesHandlers(states);
  const { usePokemonListEffect } = usePokemonSpeciesEffects({
    ...states,
    ...handlers,
  });
  const { speciesList } = states;

  usePokemonListEffect();

  return (
    <>
      {speciesList?.length > 0 &&
        speciesList.map((value: any, i: number) => {
          return (
            <SpeciesWrapper key={i}>
              <SpeciesContainer>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/${value.image}`}
                />
                <div>{value.name}</div>
              </SpeciesContainer>
            </SpeciesWrapper>
          );
        })}
    </>
  );
};

export default PokemonSpecies;
