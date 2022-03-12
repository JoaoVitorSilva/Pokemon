import { Injectable } from '@angular/core';

const keyFavorites = 'favorites-types';

@Injectable({
  providedIn: 'root',
})
export class FavoritesTypeService {
  private arrFavorites: string[];

  constructor() {

    let arr: any = localStorage.getItem(keyFavorites);
    arr = JSON.parse(arr);
    this.arrFavorites = arr ?? [];
  }

  favorite(id: string): boolean {
    let result = this.isFavorite(id);

    if (!this.isFavorite(id)) {
      this.arrFavorites.push(id);
      this.saveFavotires();
    } else {
      this.removeFavorites(id);
    }

    return !result;
  }

  isFavorite(id: string): boolean {
    return (
      this.arrFavorites.filter((value) => {
        return value == id;
      }).length > 0
    );
  }

  getFavorites(): string[] {
    return this.arrFavorites;
  }

  private saveFavotires() {
    localStorage.setItem(keyFavorites, JSON.stringify(this.arrFavorites));
  }

  private removeFavorites(id: string) {
    this.arrFavorites = this.arrFavorites.filter((value) => {
      return value != id;
    });
    this.saveFavotires();
  }
}
