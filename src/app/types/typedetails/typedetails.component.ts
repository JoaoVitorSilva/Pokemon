import { PokemonService } from './../../pokemon/pokemon.service';
import { TypePokemon } from './../../models/typePokemon';
import { TypesService } from './../types.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-typedetails',
  templateUrl: './typedetails.component.html',
  styleUrls: ['./typedetails.component.css'],
})
export class TypedetailsComponent implements OnInit {
  typeName: string = '';
  typePokemon: any;
  countPokemons = 0;
  qtdPokemonLoad = 4;

  constructor(
    private serviceTypes: TypesService,
    private route: ActivatedRoute,
    private servicePokemon: PokemonService
  ) {}

  ngOnInit(): void {
    this.typeName = this.route.snapshot.paramMap.get('name') ?? '';

    if (this.typeName) {
      this.serviceTypes.getByName(this.typeName).subscribe((result) => {
        this.typePokemon = result;
        this.getPokemonDetails(this.typePokemon.pokemon.slice(0, this.qtdPokemonLoad));
      });
    }
  }

  getPokemonDetails(data: { name: string; detalhes: any }[]) {

    this.countPokemons = 0;

    data.map((details: any, index: any) => {

      if (!details.pokemon.detalhes) {
        this.servicePokemon
          .details(details.pokemon.name)
          .subscribe((details) => {
            this.typePokemon.pokemon[index].detalhes = details;
          });

      }
      this.countPokemons++;
    });
  }

  loadMorePokemons() {
    this.getPokemonDetails(
      this.typePokemon.pokemon.slice(0, this.countPokemons + this.qtdPokemonLoad)
    );
  }
}
