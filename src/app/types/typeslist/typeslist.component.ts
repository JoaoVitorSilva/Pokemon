import { FavoritesTypeService } from './../../favorites/favorites-type.service';
import { Router } from '@angular/router';
import { TypesService } from './../types.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typeslist',
  templateUrl: './typeslist.component.html',
  styleUrls: ['./typeslist.component.css'],
})
export class TypeslistComponent implements OnInit {
  datasouce: any[] = [];
  displayedColumns = ['name', 'actions'];

  constructor(
    private serviceTypes: TypesService,
    private serviceFavorite: FavoritesTypeService,
    private routerService: Router
  ) {}

  ngOnInit(): void {
    this.serviceTypes.all().subscribe((result: any) => {
      this.datasouce = result.results;
      this.loadIsFavorite();
    });
  }

  redirect(name: string) {
    this.routerService.navigate(['/types', name]);
  }

  favorite(name: string,index:number) {
    this.datasouce[index].isFavorite = this.serviceFavorite.favorite(name);
  }

  loadIsFavorite() {
    this.datasouce.forEach((item: any, index: number) => {
      this.datasouce[index].isFavorite = this.serviceFavorite.isFavorite(
        item.name
      );
    });
  }
}
