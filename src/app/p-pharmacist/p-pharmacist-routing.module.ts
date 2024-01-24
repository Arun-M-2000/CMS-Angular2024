import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineListComponent } from './pharmacist/medicine-list/medicine-list.component';
import { PatientVMListComponent } from './pharmacist/patient-vm-list/patient-vm-list.component';
import { PatientMedicineVMListComponent } from './pharmacist/patient-medicine-vm-list/patient-medicine-vm-list.component';

import { HomeComponent } from './pharmacist/home/home.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicine-list',component:MedicineListComponent},
  {path:'patient-list',component:PatientVMListComponent},
  {path:'patientmedicine-list/:AppointmentId',component:PatientMedicineVMListComponent}
  // Example route configuration
//{ path: 'patient-medicine-vm-list/:regNo', component: PatientMedicineVMListComponent }

  

 //{ path: 'p-pharmacist/patientmedicine-list/:regNo',component: PatientMedicineVMListComponent}
  //{ path: 'p-pharmacist/patientmedicine-list', component: PatientMedicineVMListComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PPharmacistRoutingModule { }
