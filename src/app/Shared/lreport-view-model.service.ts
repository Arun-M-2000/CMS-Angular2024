import { Injectable } from '@angular/core';
import { LReportViewModel } from './lreport-view-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LReportViewModelService {
  lLabReportVM:LReportViewModel[];
  formData:LReportViewModel=new LReportViewModel();

  constructor(private httpClient:HttpClient) { }

  BindListReport()
  {
    this.httpClient.get(environment.apiUrl + "/api/LlabTests/List")
    .toPromise().then(response =>{
      this.lLabReportVM=response as LReportViewModel[];
      console.log(this.lLabReportVM);
    });
  }

//   insertLabReport(lab: LReportViewModel):Observable<any>{
//     return this.httpClient.post(environment.apiUrl +"/api/LlabTests",lab)
//   }
  
}
