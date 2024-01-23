import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DDoctorRoutingModule } from './d-doctor-routing.module';
import { DoctorComponent } from './doctor/doctor.component';
import { ListTodayappComponent } from './list-todayapp/list-todayapp.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { FormsModule } from '@angular/forms';
import { AddDiagnosisComponent } from './add-diagnosis/add-diagnosis.component';


@NgModule({
  declarations: [DoctorComponent, ListTodayappComponent, DetailsPatientComponent, PatientHistoryComponent, AddDiagnosisComponent],
  imports: [
    CommonModule,
    DDoctorRoutingModule,
    FormsModule
  ]
})
export class DDoctorModule { }
