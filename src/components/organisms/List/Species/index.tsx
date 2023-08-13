import React from "react";
import Image from "next/image";

import { Title } from "@/components/molecules/Title";
import { handlePokeTypeColor } from "@/utils";

import usePokemonSpeciesStates from "./states";
import usePokemonSpeciesHandlers from "./handlers";
import usePokemonSpeciesEffects from "./effects";
import {
  PokeTypeBadge,
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
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/${value.image}`}
                  width={150}
                  height={150}
                  alt="이미지가 깨졌습니다."
                />
              </SpeciesProfileSection>
              <SpeciesContentSection>
                <div>No.{value.id}</div>
                <Title title={value.name} />
                <div>{value.genus}</div>
                <SpeciesTypeSection>
                  {value.types.map((type: string, i: number) => {
                    return (
                      <PokeTypeBadge
                        typeColor={handlePokeTypeColor(type)}
                        key={i}
                      >
                        {type}
                      </PokeTypeBadge>
                    );
                  })}
                </SpeciesTypeSection>
              </SpeciesContentSection>
            </SpeciesContainer>
          );
        })}
    </Wrapper>
  );
};

export default PokemonSpeciesCard;
