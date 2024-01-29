import { Injectable } from '@angular/core';
import { LIDViewModel } from './lidview-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LIDViewModelService {
  lGetIDVM:LIDViewModel[];
  getidvm1:LIDViewModel=new LIDViewModel();
  constructor(private httpClient:HttpClient) { }

  BindListIDVM(LabPrescId:number):Observable<any>{
    console.log(String(LabPrescId))
    return this.httpClient.get(environment.apiUrl + '/api/LlabTests/Get', { params: { AppointmentId: String(LabPrescId) } });
  }
}
