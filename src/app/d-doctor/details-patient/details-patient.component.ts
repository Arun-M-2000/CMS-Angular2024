import { Component, OnInit } from '@angular/core';
import{DPatientDetailsViewModelService} from 'src/app/Shared/dpatient-details-view-model.service'
import { DAppointmentViewModelService } from 'src/app/Shared/dappointment-view-model.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.scss']
})
export class DetailsPatientComponent implements OnInit {


  AppointmentId : number;

  constructor(public todayapp : DAppointmentViewModelService,public patientview:DPatientDetailsViewModelService,private router: Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.AppointmentId = this.route.snapshot.params['AppointmentId'];
    this.patientview.BindListPatientDetails(this.AppointmentId);
    this.todayapp.BindListAppointment();

  }

  back(){
    this.router.navigateByUrl("d-doctor/list");
      }

  history(PatientId:number){
    this.router.navigate(["d-doctor/history",PatientId]);
  }

  goto(AppointmentId : number){
    this.router.navigate(["d-doctor/Add", AppointmentId]);
      }

// AddDiagnosis(appointmentId:number)
//   {
// console.log("appointment view component");
// this.router.navigate(['d-doctor/addDiagnosis',appointmentId])
//   }



}
