import React from "react";

import { PokemonListContainer } from "./styles";
import PokemonSpeciesCard from "./Species";

const PokemonList = () => {
  return (
    <PokemonListContainer>
      <div>GNB</div>
      <input type="text" placeholder="검색어를 입력하세요." />
      <PokemonSpeciesCard />
    </PokemonListContainer>
  );
};

export default PokemonList;
