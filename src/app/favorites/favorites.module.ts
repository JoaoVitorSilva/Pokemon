import { PokemonModule } from './../pokemon/pokemon.module';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonfavoritesComponent } from './pokemonfavorites/pokemonfavorites.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TypesfavoritesComponent } from './typesfavorites/typesfavorites.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    PokemonfavoritesComponent,
    FavoritesComponent,
    TypesfavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    PokemonModule,
    MatListModule,
    MatButtonModule
  ]
})
export class FavoritesModule { }
