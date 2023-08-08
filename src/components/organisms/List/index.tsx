import React from "react";

import { Search } from "@/components/molecules/Search";

import { PokemonListContainer } from "./styles";
import PokemonSpeciesCard from "./Species";

const PokemonList = () => {
  return (
    <PokemonListContainer>
      <div>GNB</div>
      <Search ButtonText="검색" placeholder="검색어를 입력하세요." />
      {/* TODO: map 돌리기 */}
      <PokemonSpeciesCard />
    </PokemonListContainer>
  );
};

export default PokemonList;
