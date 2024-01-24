// patient-vm-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module
import { PPatientsViewModel } from 'src/app/Shared/ppatients-view-model';
import { PPatientsViewModelService } from 'src/app/Shared/ppatients-view-model.service';
//import { PatientSharedService } from 'src/app/Shared/patient-shared.service';
import { PPatientsMedViewModelService } from 'src/app/Shared/ppatients-med-view-model.service';
@Component({
  selector: 'app-patient-vm-list',
  templateUrl: './patient-vm-list.component.html',
  styleUrls: ['./patient-vm-list.component.scss']
})
export class PatientVMListComponent implements OnInit {
  searchTerm: string = '';
  patientsFound: boolean = true;

  constructor(
    public ppatientsViewModelService: PPatientsViewModelService,
    private router: Router ,// Inject the Router module
   // private patientSharedService: PatientSharedService,
    public PPatientsMedViewModel:PPatientsMedViewModelService
  ) { }

  ngOnInit(): void {
    console.log("Patient List");
    this.ppatientsViewModelService.BindListPatients();
  }

  searchPatients() {
    console.log("Searching patients with term: ", this.searchTerm);
    if (this.searchTerm) {
      this.patientsFound = this.ppatientsViewModelService.searchPatients(this.searchTerm);
    } else {
      this.patientsFound = true;
      this.ppatientsViewModelService.BindListPatients();
    }
  }

  view(pat:any):void {
    this.ppatientsViewModelService.formData.RegNo= pat.RegNo;
    this.ppatientsViewModelService.formData.PatientName = pat.PatientName;
    this.PPatientsMedViewModel.formData.PrescribedMedicine = pat.PrescribedMedicine;
    this.PPatientsMedViewModel.formData.Dosage = pat.Dosage;
    this.PPatientsMedViewModel.formData.DosageDays = pat.DosageDays;
    this.PPatientsMedViewModel.formData.MedicineQuantity = pat.MedicineQuantity;
    
    this.router.navigate(['/p-pharmacist/patientmedicine-list',pat]);
  }

  
}
