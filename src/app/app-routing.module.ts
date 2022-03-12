import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.module').then((m) => m.PokemonModule),
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then((m) => m.FavoritesModule),
  },
  {
    path: 'types',
    loadChildren: () => import('./types/types.module').then((m) => m.TypesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
