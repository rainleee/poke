import React from "react";
import Image from "next/image";

import { Title } from "@/components/molecules/Title";

import usePokemonSpeciesStates from "./states";
import usePokemonSpeciesHandlers from "./handlers";
import usePokemonSpeciesEffects from "./effects";
import {
  SpeciesContainer,
  SpeciesContentSection,
  SpeciesProfileSection,
  SpeciesTypeSection,
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
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/${value.image}`}
                  width={150}
                  height={150}
                  alt="이미지가 깨졌습니다."
                />
              </SpeciesProfileSection>
              <SpeciesContentSection>
                <div>포켓넘버</div>
                <Title title={value.name} />
                <SpeciesTypeSection>
                  <div>속성1</div>
                  <div>속성2</div>
                </SpeciesTypeSection>
              </SpeciesContentSection>
            </SpeciesContainer>
          );
        })}
    </Wrapper>
  );
};

export default PokemonSpeciesCard;
