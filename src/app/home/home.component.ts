import { FavoritesService } from './../favorites/favorites.service';
import { FavoritesTypeService } from './../favorites/favorites-type.service';
import { PokemonService } from './../pokemon/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  existPokemon: boolean;
  existTypes: boolean;

  constructor(
    private serviceFavPokemon: FavoritesService,
    private serviceFavType: FavoritesTypeService
  ) {
    this.existPokemon = this.serviceFavPokemon.getFavorites().length > 0;
    this.existTypes = this.serviceFavType.getFavorites().length > 0;
  }

  ngOnInit(): void {}
}
