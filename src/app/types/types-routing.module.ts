import { TypeslistComponent } from './typeslist/typeslist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypedetailsComponent } from './typedetails/typedetails.component';

const routes: Routes = [{
  path: '',
  component: TypeslistComponent,
},
{
  path:':name',
  component: TypedetailsComponent,
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesRoutingModule { }
