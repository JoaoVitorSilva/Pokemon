import { FavoritesService } from '../../favorites/favorites.service';
import { PokemonService } from './../pokemon.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.css'],
})

export class PokemonDetailComponent implements OnInit, OnChanges {
  @Input() pokemon?: any;

  pokemonName: string = '';
  panelOpenState = false;
  isFavorite = false;
  isDefaultPokemon = false;

  constructor(
    private servicePokemon: PokemonService,
    private serviceFavorite: FavoritesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.pokemonName = this.route.snapshot.paramMap.get('name') ?? '';

    if (this.pokemonName && this.pokemon == null) {
      this.servicePokemon.details(this.pokemonName).subscribe((result) => {
        this.pokemon = result;
        this.isFavorite = this.serviceFavorite.isFavorite(this.pokemon?.id);
      });
    }

    if (!this.pokemon && !this.pokemonName) this.createDefault();
  }

  ngOnChanges(changes: any) {
    if (!!this.pokemon) {
      this.isDefaultPokemon = false;
      this.isFavorite = this.serviceFavorite.isFavorite(this.pokemon?.id);
    } else {
      this.createDefault();
    }
  }

  favorite() {
    if(!this.isDefaultPokemon)
      this.isFavorite = this.serviceFavorite.favorite(this.pokemon?.id);
  }

  createDefault() {
    this.isDefaultPokemon = true;
    let poke: Pokemon = {
      name: '???',
      types: [{ type: { name: 'legend' } }],
      stats: [
        { base_stat: 100, stat: { name: 'hp' } },
        { base_stat: 100, stat: { name: 'attack' } },
        { base_stat: 100, stat: { name: 'defense' } },
        { base_stat: 100, stat: { name: 'special-attack' } },
        { base_stat: 100, stat: { name: 'special-defense' } },
        { base_stat: 100, stat: { name: 'speed' } },
      ],
      moves: [
        { move: { name: 'mega-punch' } },
        { move: { name: 'mega-kick' } },
      ],
      weight: 120,
      order: 1460,
      id: '1460',
      height: 250,
      sprites: {
        other: {
          'official-artwork': {
            front_default: '/assets/images/pokemon-default.png',
          },
        },
      },
    };

    this.pokemon = poke;
  }
}
