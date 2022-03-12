import { TypesService } from './../../types/types.service';
import { FavoritesTypeService } from './../favorites-type.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typesfavorites',
  templateUrl: './typesfavorites.component.html',
  styleUrls: ['./typesfavorites.component.css'],
})
export class TypesfavoritesComponent implements OnInit {

  typesPokemon:any = [];

  constructor(
    private serviceFavorites: FavoritesTypeService,
    private serviceTypes: TypesService
  ) {}

  ngOnInit(): void {

    let favorites = this.serviceFavorites.getFavorites();

    favorites.forEach((item) => {
      this.serviceTypes.getByName(item).subscribe((types) => {
        this.typesPokemon.push(types);
        console.info(types);
      });
    });
  }
}
