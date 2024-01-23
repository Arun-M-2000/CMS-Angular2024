import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { DPatientDetailsViewModel } from './dpatient-details-view-model';



@Injectable({
  providedIn: 'root'
})
export class DPatientDetailsViewModelService {

patdetails=new DPatientDetailsViewModel();


  constructor(private httpClient: HttpClient) { }

  BindListPatientDetails(Appointment_Id:number) {
    this.httpClient.get(environment.apiUrl + "/api/DDoctor/GetPatientView/"+Appointment_Id)
      .toPromise().then(response =>{
        this.patdetails = response as DPatientDetailsViewModel;
        console.log(this.patdetails);
      });
  }
  




}
