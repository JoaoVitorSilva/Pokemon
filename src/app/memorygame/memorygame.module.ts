import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemorygameComponent } from './memorygame.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    MemorygameComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MemorygameModule { }
