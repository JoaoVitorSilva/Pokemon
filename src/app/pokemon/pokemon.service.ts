import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationStrategy } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private httpClient: HttpClient) {}

  all(pageurl?: string): Observable<any>{

    this.url = pageurl != null ? pageurl : this.url;
    return this.httpClient.get(this.url);
  }

  details(pageurl: string): Observable<any>{
    return this.httpClient.get(pageurl);
  }
}
