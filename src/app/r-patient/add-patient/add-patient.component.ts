import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/Shared/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  constructor(public patientServices:PatientService,
    private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm)
  {
    let addid=this.patientServices.formData.PatientId;
    if(addid ==0 || addid ==null){
      console.log(form.value);
      this.InsertRecord(form);
    }
    else{
     this.updaterecord(form);
     //alert('there is update')
    }
     
    
  }

  //insert 
  InsertRecord(form:NgForm)
  {
    console.log("Inserting");
    this.patientServices.InsertPatient(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form);

        //alert
        this.toastr.success('added sucessfully','Cms App 2024');
        this.router.navigate(['r-patient/list-patient']);
      }
    )
  }


  updaterecord(form: NgForm) 
  {

    //console.log("updateing");
    this.patientServices.updatePatient(form.value).subscribe(
      (result)=>{
       // console.log(result);
        this.resetForm(form);
        this.toastr.success('updated sucessfully','EMS APP 2024');
        this.router.navigate(['r-patient/list-patient']);
      }
    )

  }

  //reset form
  resetForm(form:NgForm)
  {
    if(form !=null)
    {
      form.resetForm();
    }
  }


  back()
  {
    this.router.navigateByUrl("r-patient/list-patient")
  }
}


