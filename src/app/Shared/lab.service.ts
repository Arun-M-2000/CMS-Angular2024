import { Injectable } from '@angular/core';
import { Lab } from './lab';
import { HttpClient } from '@angular/common/http';
import{environment} from'src/environments/environment'
import { error } from '@angular/compiler/src/util';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  lab:Lab[];
  formData:Lab=new Lab();
  static formData: Lab;

  constructor(private httpClient:HttpClient) { }
  BindListLab(){
    this.httpClient.get(environment.apiUrl+"api/ALab")
    .toPromise().then(response=>
      {
      this.lab=response as Lab[];
      console.log(this.lab);
  }).catch(error=>{console.error('Error:',error)})
}
// add lab
insertLabTest(lb: Lab): Observable<any> {
  return this.httpClient.post(environment.apiUrl + "api/ALab",lb);

}

//Get Lab
getLab(testId:number):Observable<any>
{
  return this.httpClient.get(environment.apiUrl+"api/ALab/"+testId)
}

updateLab(lab:Lab):Observable<any>{
  return this.httpClient.put(environment.apiUrl + "api/alab/",lab);
}

deleteLab(id:number){
  return this.httpClient.delete(environment.apiUrl + "api/ALab/"+id);
}
}
