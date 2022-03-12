import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemondetail/pokemondetail.component';
import { PokemonComponent } from './pokemonlist/pokemon.component';


const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
  },
  {
    path:':name',
    component:PokemonDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
