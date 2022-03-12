  export interface Pokemons extends Array<Pokemon>{}

  export interface Pokemon {
      abilities?: any[];
      base_experience?: number;
      forms?: any[];
      game_indices?: [];
      height: number;
      held_items?: any[];
      id: string;
      is_default?: boolean;
      location_area_encounters?: string;
      moves: any[];
      name: string;
      order: number;
      past_types?: any[];
      species?: any;
      sprites?: any;
      stats: any;
      types: any;
      weight: number;
  }










