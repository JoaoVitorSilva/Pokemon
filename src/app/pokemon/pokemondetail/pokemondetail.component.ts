import { FavoritesService } from './../favorites.service';
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

  constructor(
    private servicePokemon: PokemonService,
    private serviceFavorite: FavoritesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('name') ?? '';

    if (this.pokemonName) {
      this.servicePokemon
        .details(this.pokemonName)
        .subscribe((result) => (this.pokemon = result));
    }

    if (!this.pokemon && !this.pokemonName) this.createDefault();
  }

  ngOnChanges(changes: any) {
    console.log('change');
    this.isFavorite = this.serviceFavorite.isFavorite(this.pokemon?.id);
  }

  favorite() {
    this.isFavorite = this.serviceFavorite.favorite(this.pokemon?.id);
  }

  createDefault() {
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
        other: { 'official-artwork': { front_default: '/assets/images/pokemon-default.png' } },
      },
    };

    this.pokemon = poke;
  }
}
