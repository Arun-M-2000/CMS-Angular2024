import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment} from 'src/environments/environment';
//import { LaboratoryComponent } from '../l-laboratory/laboratory/laboratory.component';
//import { ListLabprecComponent } from '../l-laboratory/list-labprec/list-labprec.component';
import {LPrescriptionViewModel} from '../shared/lprescription-view-model';
@Injectable({
  providedIn: 'root'
})
export class LPrescriptionViewModelService {
  labtestVM:LPrescriptionViewModel[];
formData:LPrescriptionViewModel=new LPrescriptionViewModel;

  constructor(private httpClient:HttpClient) { }

  BindListLabTestPrec()
  {
    this.httpClient.get(environment.apiUrl + "/api/LlabTests")
    .toPromise().then(response =>{
      this.labtestVM=response as LPrescriptionViewModel[];});
  }
}
