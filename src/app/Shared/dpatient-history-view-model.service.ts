import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { DPatientHistoryViewModel } from './dpatient-history-view-model';


@Injectable({
  providedIn: 'root'
})
export class DPatientHistoryViewModelService {

  pathis:DPatientHistoryViewModel[];


  constructor(private httpClient: HttpClient) { }

  BindListPatientHistory(PatientId:number) {
    this.httpClient.get(environment.apiUrl + "/api/DDoctor/GetPatientHistory/"+PatientId)
      .toPromise().then(response =>{
        this.pathis = response as DPatientHistoryViewModel[];
        console.log(this.pathis);
      });
  }
  

}
