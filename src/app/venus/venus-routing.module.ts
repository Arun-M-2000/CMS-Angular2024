import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenusHomeComponent } from './venus-home/venus-home.component';

const routes: Routes = [

{path:'',component:VenusHomeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenusRoutingModule { }
