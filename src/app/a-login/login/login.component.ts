import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{LoginUsersService} from 'src/app/Shared/login-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    //Declare variables
    loginForm: FormGroup;
    isSubmitted = false;
    error: string;

  constructor(private formBuilder: FormBuilder,
    private authService: LoginUsersService,
    private router: Router) { }

  ngOnInit(): void {

 //create a reactive form modal
 this.loginForm = this.formBuilder.group({

  //Form controlName fields
  UserName: ['', [Validators.required]],
  Password: ['', [Validators.required]]
});

}
 //get all controls for validation
 get formControls() {
  return this.loginForm.controls;
}
logincredentials() {
  console.log(this.loginForm.value);
  this.isSubmitted = true;
  console.log("Submitted form for credentials");

  //form is invalid
  if (this.loginForm.invalid) {
    this.error = "Invaild Username or Password"
  }
  //form is vaild
  if (this.loginForm.valid) {
    console.log("SUbmitted with vaild");


    //calling method from AuthService --Authendication and Authorize

    this.authService.loginVerify(this.loginForm.value).subscribe(
      response => {
        this.error = '';
        console.log(response);


        if (response == null) {
          this.error = "Invaild user or password";
        }
        else if (response.rId == 1) {
          this.router.navigateByUrl('a-home/adminhome');
          console.log('Admin')
        }
        else if (response.rId == 2) {
          this.router.navigateByUrl('r-patient/list-patient');
          console.log('receptionist')
        }

        else if (response.rId == 3) {
          this.router.navigateByUrl('d-doctor/list');
          console.log('Admin')
        }
        else if (response.rId == 4) {
          this.router.navigateByUrl('l-laboratory/list');
          console.log('laboratory')
        }
        else if (response.rId == 5) {
          this.router.navigateByUrl('p-pharmacist/home');
          console.log('pharmacist')
        }
        else {
          this.error = "You are not allowed"
        }
      },
      error=>{
        console.log(error);
        this.error="Invaild UseerNAme or password"
      }
    )

  }
}

  
}
