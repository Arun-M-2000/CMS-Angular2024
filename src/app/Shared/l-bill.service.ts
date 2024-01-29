import { Injectable } from '@angular/core';
import { LBill } from './l-bill';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LBillService {
  labBillVM:LBill[];
  formData_L:LBill=new LBill()

  constructor(private httpClient:HttpClient) { }

  BindListLabBill(ReportId:number)
  {
    return this.httpClient.get(environment.apiUrl + "/api/LlabTests/Bill", { params: { ReportId: String(ReportId) } })
}
}
