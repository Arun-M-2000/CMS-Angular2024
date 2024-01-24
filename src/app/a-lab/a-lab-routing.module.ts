import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListLabComponent } from './list-lab/list-lab.component';
import { AddLabComponent } from './add-lab/add-lab.component';
import { EditLabComponent } from './edit-lab/edit-lab.component';


const routes: Routes = [
  {path:'',component:ListLabComponent},
  {path:'list-lab',component:ListLabComponent},
  {path:'add-lab',component:AddLabComponent},
  {path:'edit-lab/:labId',component:EditLabComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ALabRoutingModule { }
