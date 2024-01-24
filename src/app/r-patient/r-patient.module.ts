import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RPatientRoutingModule } from './r-patient-routing.module';
import { PatientComponent } from './patient/patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { DisabledPatientListComponent } from './disabled-patient-list/disabled-patient-list.component';

@NgModule({
  declarations: [PatientComponent, ListPatientComponent, AddPatientComponent, DetailsPatientComponent, EditPatientComponent, DisabledPatientListComponent],
  imports: [
    CommonModule,
    RPatientRoutingModule,
    FormsModule,
    
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:10000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
  ]
})
export class RPatientModule { }
