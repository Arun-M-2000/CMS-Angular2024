import { Injectable } from '@angular/core';
import { Staff } from './staff';
import{ HttpClient } from '@angular/common/http'
import{environment} from'src/environments/environment'
import { error } from '@angular/compiler/src/util';
import{Observable} from 'rxjs';
import { StaffDetailsViewModel } from './staff-details-view-model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  staffVM:StaffDetailsViewModel[];
  staff:Staff[];
  formData:Staff=new Staff();
  static formData: Staff;
  constructor(private httpClient:HttpClient) { }
  

  
  
  updatestaff(staff: Staff):Observable<any>{
    return this.httpClient.put(environment.apiUrl + "/api/AStaff/",staff);
  }
  
  
}
