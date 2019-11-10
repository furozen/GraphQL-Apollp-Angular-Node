import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {RegionsComponent} from './examples/regions/regions.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: RegionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
