import { Injectable } from '@angular/core';
import { ReportGeneration } from './report-generation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportGenerationService {

  labreportgeneration: ReportGeneration[];
  formData:ReportGeneration =new ReportGeneration();
  constructor(private httpClient:HttpClient) { }

   //Insert the labreport
   insertLabReport(lab: ReportGeneration):Observable<any>{
    return this.httpClient.post(environment.apiUrl +"/api/LlabTests",lab)
  }

}
