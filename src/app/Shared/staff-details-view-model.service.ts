import { Injectable } from '@angular/core';

import { Staff } from './staff';
import { Department } from './department';
import { Doctor } from './doctor';
import { LoginUsers } from './login-users';
import { Qualifications } from './qualifications';
import { Roles } from './roles';
import { Specializations } from './specializations';
import { Observable } from 'rxjs';


import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StaffDetailsViewModel } from './staff-details-view-model';

@Injectable({
  providedIn: 'root'
})
export class StaffDetailsViewModelService {
formData:StaffDetailsViewModel=new StaffDetailsViewModel();
staffdetailsviewmodel:StaffDetailsViewModel[];
staff:Staff[];
departments:Department[];
doctor:Doctor[];
loginuser:LoginUsers[];
qualification:Qualifications[];
role:Roles[];
specialization:Specializations[];

static formData: StaffDetailsViewModel;

constructor( private httpClient:HttpClient) { }

BindListStaffs() {
  this.httpClient.get(environment.apiUrl + "api/AStaff")
    .toPromise().then(response => {
      this.staffdetailsviewmodel = response as StaffDetailsViewModel[];
      console.log(this.staffdetailsviewmodel);

    });
}
insertstaff(staffVm: StaffDetailsViewModel): Observable<any> {
  return this.httpClient.post(environment.apiUrl + "api/AStaff",staffVm);

}

//Get Lab
getstaff(StaffId:number):Observable<any>
{
  return this.httpClient.get(environment.apiUrl+"api/AStaff/"+StaffId)
}




}







