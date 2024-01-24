import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient,HttpClientModule} from '@angular/common/http';
import { Patient } from './patient';
import { Observable, observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients:Patient[];
  formData:Patient=new Patient();

  constructor(private httpClient:HttpClient) { }
//Building patient list 
BindListPatients()
{
  this.httpClient.get(environment.apiUrl + "/api/RPatient/List")
  .toPromise().then(response=>
    
    this.patients=response as Patient[]);
   // console.log('hai');
}

//Adding patient 

InsertPatient(pa : Patient):Observable<any>
{
  return this.httpClient.post(environment.apiUrl+"/api/RPatient/Insert",pa)
}

//update  patient
updatePatient(pId:number):Observable<any>{
return this.httpClient.put(environment.apiUrl+"/api/RPatient/Update",pId);


}

getPatientById(patientId:number):Observable<any>{
return this.httpClient.get(environment.apiUrl+ "/api/RPatient/"+ patientId)
}

//disabling Patient Records
disablePatient(patientId: number) {
return this.httpClient.patch(environment.apiUrl + 'api/RPatient/' + patientId, {});
}
//Get All Disabled Patient Records
BindDisabledPatientRecords(){
this.httpClient.get(environment.apiUrl+'api/RPatient/GetDisabledPatient').toPromise().then(
  response=>{
    this.patients=response as Patient[];
    console.log(this.patients);
  }
).catch(error=>{
  console.error('Error: ',error);
})
}

//Enable the Disabled Patient Records
enablePatient(patientId:number){
return this .httpClient.patch(environment.apiUrl+'api/RPatient/Enable/'+patientId,{});
}




}
