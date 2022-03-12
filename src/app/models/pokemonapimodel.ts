export interface PokemonApiModel {
  name?: string;
  url?: string;
  next?: string;
  previous?: string;
  results: [];
  count?: number;
}
