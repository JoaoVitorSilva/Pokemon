import { MemorygameComponent } from './memorygame/memorygame.component';
import { MemorygameModule } from './memorygame/memorygame.module';
import { NgModule, Component } from '@angular/core';
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
  {
    path:'memorygame',
    component: MemorygameComponent,
    loadChildren: () => import('./memorygame/memorygame.module').then((m) => m.MemorygameModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
