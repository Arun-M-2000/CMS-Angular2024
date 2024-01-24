import { Injectable } from '@angular/core';
import { DAppointmentViewModel } from './dappointment-view-model';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DAppointmentViewModelService {
  //dappointmentViewModel:DAppointmentViewModel[];
  appointments:DAppointmentViewModel[];
  constructor(private httClient: HttpClient) { }
//Get all Appointment --for biding appointment list

BindListAppointment()
{
  this.httClient.get(environment.apiUrl + "/api/DDoctor/GetAppointmentView/801")
  ///api/DDoctor/GetAppointmentView/{docId}
  .toPromise().then(response =>{
    this.appointments = response as DAppointmentViewModel[]
    console.log(this.appointments)
  });
}


}
