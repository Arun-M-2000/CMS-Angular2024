import { Injectable } from '@angular/core';
import { LReportViewModel } from './lreport-view-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LReportViewModelService {
  lReportVM:LReportViewModel[];
  formData:LReportViewModel=new LReportViewModel();

  constructor(private httpClient:HttpClient) { }

  BindListReport()
  {
    this.httpClient.get(environment.apiUrl + "/api/LlabTests/List")
    .toPromise().then(response =>{
      this.lReportVM=response as LReportViewModel[];
      console.log(this.lReportVM);
    });
  }

  insertLabReport(lab: LReportViewModel):Observable<any>{
    return this.httpClient.post(environment.apiUrl +"/api/LlabTests",lab)
  }













  
  //Add Employee  --INSERT
  InsertEmployee(rep:LReportViewModel):Observable<any>
  {
    return this.httpClient.post(environment.apiUrl + "/api/LlabTests", rep);
  }
  
}
