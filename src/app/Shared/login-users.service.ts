import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUsers } from './login-users';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginUsersService {

  constructor(private httpClient:HttpClient) { }

  public loginVerify(user:LoginUsers){
    //Calling the api for checking username and password
    
        return this.httpClient.get<LoginUsers>(environment.apiUrl+"/api/AUserLogin/"+user.UserName+'/'+user.Password);
      }
}
