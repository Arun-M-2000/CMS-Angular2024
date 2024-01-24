import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DDiagnosisViewModel } from './ddiagnosis-view-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import {Lab} from './lab';
import {Medicine} from './medicine';

@Injectable({
  providedIn: 'root'
})
export class DDiagnosisViewModelService {

  //////////////////////////////////////////////

  labTests:Lab[];
  medicines:Medicine[];
  formData:DDiagnosisViewModel=new DDiagnosisViewModel();

//////////////////////////////////////////////////////

  constructor(private httpClient: HttpClient) { }


 //Get all LabTests
 BindListLabTest()
 {
   this.httpClient.get(environment.apiUrl+ "/api/ALab")
   .toPromise().then(response => {
     this.labTests=response as Lab[];
     console.log(this.labTests);
   })
 }

 //Get all medicines
 BindListMedicines()
 {
   this.httpClient.get(environment.apiUrl+ "/api/AMedicine")
   .toPromise().then(response => {
     this.medicines=response as Medicine[];
     console.log(this.medicines);
   })
 }


InsertDiagnosis(diag:DDiagnosisViewModel):Observable<any>
  {
    return this.httpClient.post(environment.apiUrl + "/api/DDoctor", diag);
  }

}
