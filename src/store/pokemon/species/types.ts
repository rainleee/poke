export type NonNullablePokemonListQuery = any;

export type PokemonSpeciesNodes = any;
export interface PokemonSpeciesStates {
  speciesList: PokemonSpeciesNodes;
}

export interface PokemonSpeciesStatesActions {
  setSpeciesList: (speciesList: any) => void; //TODO: type change
  // setSpeciesList: (speciesList: PokemonSpeciesNodes) => void;
}

export type States = PokemonSpeciesStates;
export type Actions = PokemonSpeciesStatesActions;

export type PokemonSpeciesSlice = States & Actions;
