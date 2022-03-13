import { FavoritesService } from './../favorites/favorites.service';
import { PokemonService } from './../pokemon/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memorygame',
  templateUrl: './memorygame.component.html',
  styleUrls: ['./memorygame.component.css'],
})
export class MemorygameComponent implements OnInit {
  qtdCards = 9;
  pokemons: any[] = [];
  arrNamePokemons: any[];
  arrSelectedCards: number[] = [];
  gameStart = false;
  hitsCards = 0;

  constructor(
    private servicePokemon: PokemonService,
    private fav: FavoritesService
  ) {
    this.arrNamePokemons = [];
  }

  ngOnInit(): void {}

  starGame() {
    if (!this.gameStart) {
      this.gameStart = true;
      this.servicePokemon.all('', 9999).subscribe((valor: any) => {
        this.arrNamePokemons = valor.results;
        let arrRandomIndexNumbers = this.getRandomNumber(
          this.arrNamePokemons?.length,
          this.qtdCards
        );
        this.getPokemon(arrRandomIndexNumbers, this.arrNamePokemons);
      });
    }else{
      this.clearGame();
      this.starGame();

    }
  }

  clearGame(){
    this.qtdCards = 9;
    this.pokemons = [];
    this.arrNamePokemons = [];
    this.arrSelectedCards = [];
    this.gameStart = false;
    this.hitsCards = 0;
  }

  getPokemon(arrIndex: number[], arrNames: any[]) {
    arrIndex.forEach((index: number) => {
      let name = arrNames[index].name;
      this.servicePokemon.details(name).subscribe((pokemon) => {
        pokemon.is_default = false;
        this.pokemons.push(pokemon);
        this.pokemons.push(this.clone(pokemon));
        this.pokemons = this.shuffle(this.pokemons);
      });
    });
  }

  selectCard(index: number) {
    if (this.pokemons[index].memorycard) {
      return;
    }

    if (this.arrSelectedCards.filter((value) => value == index).length > 0) {
      this.pokemons[index].is_default = !this.pokemons[index].is_default;
      return;
    }

    if (this.arrSelectedCards.length == 2) {
      this.deselectCard();
    }

    if (
      this.arrSelectedCards.length <= 1 &&
      (!!this.arrSelectedCards[0] || this.arrSelectedCards[0] != index)
    ) {
      this.arrSelectedCards.push(index);
      this.pokemons[index].is_default = !this.pokemons[index].is_default;
    }

    this.checkCards();
  }

  deselectCard() {
    this.arrSelectedCards.forEach(
      (index) => (this.pokemons[index].is_default = false)
    );

    this.arrSelectedCards = [];
  }

  checkCards() {
    if (this.arrSelectedCards.length == 2) {
      let indexCard1 = this.arrSelectedCards[0];
      let indexCard2 = this.arrSelectedCards[1];

      if (this.pokemons[indexCard1].id == this.pokemons[indexCard2].id) {
        this.pokemons[indexCard1].memorycard = true;
        this.pokemons[indexCard2].memorycard = true;
        this.arrSelectedCards = [];
        this.hitsCards++;
      }
    }
  }

  getRandomNumber(maxNumber: number, times: number): number[] {
    let arr: number[] = [];

    while (arr.length < times) {
      let tmpValue = Math.floor(Math.random() * (maxNumber - 0 + 1)) + 0;

      let numberExist = arr.filter((value) => value == tmpValue);

      if (numberExist != null && numberExist.length == 0) {
        arr.push(tmpValue);
      }
    }

    return arr;
  }

  clone(obj: any) {
    if (null == obj || 'object' != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  }

  shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
