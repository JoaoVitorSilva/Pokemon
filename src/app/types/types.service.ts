import { PokemonService } from './../pokemon/pokemon.service';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError,map } from 'rxjs';
import { TypePokemon } from '../models/typePokemon';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  private url = environment.URL_API + 'type/';

  constructor(private httpClient: HttpClient) {}

  all(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  getByName(name: string): Observable<TypePokemon> {
    if (!name) return throwError('Type não informado');
    return this.httpClient.get<TypePokemon>(`${this.url}${name}`)
  }
}
