import { Component, OnInit } from '@angular/core';
import{DAppointmentViewModelService} from 'src/app/Shared/dappointment-view-model.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todayapp',
  templateUrl: './list-todayapp.component.html',
  styleUrls: ['./list-todayapp.component.scss']
})
export class ListTodayappComponent implements OnInit {

  filter:any;

  constructor(public dappointmentViewModelService:DAppointmentViewModelService,private router: Router) { }

  ngOnInit(): void {
    this.dappointmentViewModelService.BindListAppointment();
  }

  goto(AppointmentId : number){
    this.router.navigate(["d-doctor/detail", AppointmentId]);
      }

}
