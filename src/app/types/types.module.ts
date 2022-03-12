import { PokemonModule } from './../pokemon/pokemon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypeslistComponent } from './typeslist/typeslist.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TypedetailsComponent } from './typedetails/typedetails.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    TypeslistComponent,
    TypedetailsComponent
  ],
  imports: [
    CommonModule,
    TypesRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatExpansionModule,
    PokemonModule
  ]
})
export class TypesModule { }
