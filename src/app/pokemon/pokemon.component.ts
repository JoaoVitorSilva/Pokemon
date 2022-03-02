import { PokemonService } from './pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  listPokemons: any[];
  count: 0;
  nextPage: '';
  previousPage: '';
  selectedPokemon: any;

  constructor(private servicePokemon: PokemonService) {
    this.listPokemons = [];
    this.count = 0;
    this.nextPage = '';
    this.previousPage = '';
    this.selectedPokemon = {};
  }

  ngOnInit(): void {
    this.all();
  }

  private loadProperties(result: any) {
    this.listPokemons = result.results;
    this.count = result.count;
    this.nextPage = result.next;
    this.previousPage = result.previous;
  }

  private loadPokemon(result:any){
    this.selectedPokemon.name = result.name;
    this.selectedPokemon.height = result.height;
    this.selectedPokemon.base_experience = result.base_experience;
    this.selectedPokemon.weight = result.weight;
    this.selectedPokemon.img = result.sprites?.other?.home?.front_default;
  }

  all(url?: string) {
    this.servicePokemon.all(url).subscribe(
      (result: any) => {
        this.loadProperties(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  details(url: string) {
    this.servicePokemon.details(url).subscribe(
      (result:any) => {
        this.loadPokemon(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
