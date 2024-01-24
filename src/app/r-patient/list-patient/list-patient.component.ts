import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
//import { ConfirmationDailogComponent } from '../confirmation-dailog/confirmation-dailog.component';
import {  ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/Shared/patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {

  constructor(public patientServices:PatientService,private router:Router,private dialog: MatDialog,private toastr:ToastrService,private route:ActivatedRoute,) { }

  ngOnInit(): void {
    console.log("Welcome to life cycle hook")
    this.patientServices.BindListPatients()
  }
  
  updatepatient(patientId: number){
    console.log(patientId);
    this.router.navigate(['r-patient/edit-patient',patientId])
  }

  Add(){
    this.router.navigate(["r-patient/Add-patient"])
  }

  detailsPatient(PatientId:number) {
    console.log(PatientId);
    this.router.navigate(['/r-patient/details-patient',PatientId]);

  }

  bookAppointment(PatientId : number) {
       this.router.navigate(['r-appointment/book'])
  }

  


  //Open confirmation dialog
// openConfirmationDialog(patientId: number): void {
  
//   const confirmationMessage = this.showDisablePatient
//   ? 'Do you really want to enable this patient record?'
//   : 'Do you really want to disable this patient record?';

// const dialogRef = this.dialog.open(ConfirmationDailog, {
//   width: '500px',
//   data: { message: confirmationMessage }
// });

//   dialogRef.afterClosed().subscribe(result => {
//     if (result) {
//       if(this.showDisablePatient){
//         this.enablePatientRecords(patientId);
//       }
//       else
//       {
//         // User clicked Confirm
//       this.disablePatientRecords(patientId);
      
//       }  
      
//     }
//   });
// }
//Disabling the Patient Records
disablePatientRecords(patientId: number) {
  console.log('Disabling patient records for ID:', patientId);

  this.patientServices.disablePatient(patientId).subscribe(
    response => {
      console.log('Patient records disabled successfully:', response);
      this.toastr.success('Disabled the Patient Record Successfully', 'Venus Clinic');
      
      // Reload the current route
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.router.url]);
    },
    error => {
      console.error('Error disabling patient records:', error);
      this.toastr.error('Error disabling Patient Record', 'venus Clinic');
      // Handle error as needed
    }
  );
}


//enabling the Patient Records
enablePatientRecords(patientId: number) {
  console.log('enabling patient records for ID:', patientId);

  this.patientServices.enablePatient(patientId).subscribe(
    response => {
      console.log('Patient records enabled successfully:', response);
      this.toastr.success('Enabled the Patient Record Successfully', 'venus Clinic');
      
      // Reload the current route
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['r-patient/']);
    },
    error => {
      console.error('Error Enabling patient records:', error);
      this.toastr.error('Error Enabling Patient Record', 'venus Clinic');
      // Handle error as needed
    }
  );
}

}

