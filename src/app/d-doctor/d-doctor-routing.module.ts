import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodayappComponent } from './list-todayapp/list-todayapp.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { AddDiagnosisComponent } from './add-diagnosis/add-diagnosis.component';

const routes: Routes = [

  { path:'list',component:ListTodayappComponent },
  { path : 'detail/:AppointmentId', component : DetailsPatientComponent},
  { path : 'history/:PatientId', component : PatientHistoryComponent},
  { path : 'Add/:AppointmentId', component : AddDiagnosisComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DDoctorRoutingModule { }
