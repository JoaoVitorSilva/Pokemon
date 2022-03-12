import { PokemonRoutingModule } from './pokemon-routing.module';
import { environment } from './../../environments/environment';
import { Pokemon } from '../models/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PokemonApiModel } from '../models/pokemonapimodel';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url = environment.URL_API;

  constructor(private httpClient: HttpClient) {}

  all(pageurl?: string, count: number = 20): Observable<PokemonApiModel> {

    const api = pageurl ? pageurl : this.url;
    let params = new HttpParams().append('limit', count);
    return this.httpClient.get<PokemonApiModel>(api, { params: params });
  }

  details(name: string): Observable<Pokemon> {
    if (!name) return throwError('Pokemon não informado');

    return this.httpClient.get<Pokemon>(`${this.url}${name}`);
  }
}
