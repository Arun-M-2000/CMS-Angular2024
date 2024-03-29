import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ListMedicineComponent} from './medicine/list-medicine/list-medicine.component';
import { EditLabComponent } from '../a-lab/edit-lab/edit-lab.component';
import { AddMedicineComponent } from './medicine/add-medicine/add-medicine.component';
import { EditMedicineComponent } from './medicine/edit-medicine/edit-medicine.component';
const routes: Routes = [
  {path:'list-medicine',component:ListMedicineComponent},
  {path:'edit-medicine/:MedId',component:EditMedicineComponent},
  {path:'add-medicine',component:AddMedicineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AMedicineRoutingModule { }
