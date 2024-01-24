import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DPatientHistoryViewModelService} from 'src/app/Shared/dpatient-history-view-model.service'

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.scss']
})
export class PatientHistoryComponent implements OnInit {

  PatientId:number;

  constructor(public dpatientHistoryViewModelService:DPatientHistoryViewModelService,public router:Router, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.PatientId = this.route.snapshot.params['PatientId'];
    this.dpatientHistoryViewModelService.BindListPatientHistory(this.PatientId);

  }
  back(){
    this.router.navigateByUrl("d-doctor/detail/");
      }

}
