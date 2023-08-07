import React from "react";

import usePokemonSpeciesStates from "./states";
import usePokemonSpeciesHandlers from "./handlers";
import usePokemonSpeciesEffects from "./effects";
import {
  SpeciesContainer,
  SpeciesContentSection,
  SpeciesProfileSection,
  Wrapper,
} from "./styles";

const PokemonSpeciesCard = () => {
  const states = usePokemonSpeciesStates();
  const handlers = usePokemonSpeciesHandlers(states);
  const { usePokemonListEffect } = usePokemonSpeciesEffects({
    ...states,
    ...handlers,
  });
  const { speciesList } = states;

  usePokemonListEffect();

  return (
    <Wrapper>
      {speciesList?.length > 0 &&
        speciesList.map((value: any, i: number) => {
          return (
            <SpeciesContainer key={i}>
              <SpeciesProfileSection>
                {/*TODO: nextImage로 변경  */}
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/${value.image}`}
                />
              </SpeciesProfileSection>
              <SpeciesContentSection>
                <div>포켓넘버</div>
                <div>{value.name}</div>
                <div>
                  <div>속성1</div>
                  <div>속성2</div>
                </div>
              </SpeciesContentSection>
            </SpeciesContainer>
          );
        })}
    </Wrapper>
  );
};

export default PokemonSpeciesCard;
