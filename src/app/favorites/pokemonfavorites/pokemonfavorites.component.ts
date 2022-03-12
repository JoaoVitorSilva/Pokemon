import { PokemonService } from './../../pokemon/pokemon.service';
import { FavoritesService } from './../favorites.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemonfavorites',
  templateUrl: './pokemonfavorites.component.html',
  styleUrls: ['./pokemonfavorites.component.css'],
})
export class PokemonfavoritesComponent implements OnInit {
  pokemonList: Pokemon[] = [];

  constructor(
    private serviceFavorites: FavoritesService,
    private servicePokemon: PokemonService
  ) {}

  ngOnInit(): void {
    let favorites = this.serviceFavorites.getFavorites();

    favorites.forEach((item) => {
      this.servicePokemon.details(item).subscribe((poke) => {
        this.pokemonList.push(poke);
      });
    });
  }
}
