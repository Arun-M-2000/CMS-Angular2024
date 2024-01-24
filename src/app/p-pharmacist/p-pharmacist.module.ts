import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PPharmacistRoutingModule } from './p-pharmacist-routing.module';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { MedicineListComponent } from './pharmacist/medicine-list/medicine-list.component';
import { PatientVMListComponent } from './pharmacist/patient-vm-list/patient-vm-list.component';
import { PatientMedicineVMListComponent } from './pharmacist/patient-medicine-vm-list/patient-medicine-vm-list.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pharmacist/home/home.component';
import { PPharmacistBillComponent } from './p-pharmacist-bill/p-pharmacist-bill.component';



@NgModule({
  declarations: [ PharmacistComponent,MedicineListComponent, PatientVMListComponent, PatientMedicineVMListComponent, HomeComponent, PPharmacistBillComponent],
  imports: [
    CommonModule,
    PPharmacistRoutingModule,
    FormsModule
  ]
})
export class PPharmacistModule { }
