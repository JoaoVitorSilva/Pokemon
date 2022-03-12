import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonApiModel } from 'src/app/models/pokemonapimodel';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  inputSearch!: string;
  errorMessage:string = '';

  pokemonResult?: PokemonApiModel;
  datasouce: any[] = [];
  selectedPokemon: any;
  displayedColumns: string[] = [
    'order',
    'img',
    'name',
    'height',
    'weight',
    'types',
    'actions',
  ];

  constructor(
    private servicePokemon: PokemonService,
    private routerService: Router
  ) {}

  ngOnInit(): void {
    this.listPokemon();
  }

  listPokemon(url?: string) {
    this.servicePokemon.all(url).subscribe((result: PokemonApiModel) => {
      this.pokemonResult = result;
      this.datasouce = this.pokemonResult?.results;
      this.getPokemonDetails(result.results);
    });
  }

  getPokemonDetails(data: { name: string }[]) {
    console.log(data);

    data.map((details: { name: string }, index: any) => {
      this.servicePokemon.details(details.name).subscribe((details) => {
        this.datasouce[index].detalhes = details;
      });
    });
  }

  showPokemonDetails(detalhes: any) {
    this.selectedPokemon =
      detalhes?.id != this.selectedPokemon?.id ? detalhes : null;
  }

  redirect(name: string) {
    this.routerService.navigate(['/pokemon', name]);
  }

  pesquisar() {

    this.errorMessage = '';

    if (this.inputSearch.length < 4 && this.inputSearch.length != 0) {
      this.errorMessage = 'Minimun of 3 caracters';
      return;
    }

    if(this.inputSearch.length == 0){
      this.listPokemon();
      return;
    }

    this.servicePokemon.all('', 99999).subscribe((result: PokemonApiModel) => {
      let arr: Pokemon[] = result.results;

      this.datasouce = arr.filter((value: Pokemon) => {
        return value.name.includes(this.inputSearch);
      });
      this.getPokemonDetails(this.datasouce);
    });
  }
}
