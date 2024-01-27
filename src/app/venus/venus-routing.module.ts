import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenusHomeComponent } from './venus-home/venus-home.component';
import { VenusWholeLoginComponent } from './venus-whole-login/venus-whole-login.component';

const routes: Routes = [

{path:'',component:VenusHomeComponent},
{path:'whole',component:VenusWholeLoginComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenusRoutingModule { }
