import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DDiagnosisViewModelService } from 'src/app/Shared/ddiagnosis-view-model.service';
import { DDiagnosisViewModel } from 'src/app/Shared/ddiagnosis-view-model';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.scss']
})
export class AddDiagnosisComponent implements OnInit {
  public AppointmentID: number;
  DefaultLabTestStatus: string = "PENDING";
  dosages: string[] = this.GenerateDosages();
  public medicineQuantity: number = 0;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    public diagnosisService: DDiagnosisViewModelService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.AppointmentID = this.route.snapshot.params['AppointmentId'];
    this.diagnosisService.BindListLabTest();
    this.diagnosisService.BindListMedicines();
    this.diagnosisService.formData = new DDiagnosisViewModel();
    this.diagnosisService.formData.AppointmentId = this.AppointmentID;
    this.diagnosisService.formData.LabTestStatus = this.DefaultLabTestStatus;
    this.diagnosisService.formData.MedicineQuantity = this.medicineQuantity;
    this.cdr.detectChanges();
  }

  OnSubmit(form: NgForm) {
    let addId = this.diagnosisService.formData.DiagnosisId;
    if (addId == 0 || addId == null) {
      this.InsertDiagnosis(form);
    } else {
      console.log("Diagnosis Id already exists");
    }
  }

  InsertDiagnosis(form: NgForm) {
    this.diagnosisService.InsertDiagnosis(form.value).subscribe(
      (result) => {
        console.log(result);
        this.ResetForm(form);
        this.toastr.success('Diagnosis added successfully', 'VENUS CMS 2024');
        if (this.AppointmentID) {
          this.router.navigate(['d-doctor/list']);
        }

      }
    )
  }

  ResetForm(form: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  GenerateDosages(): string[] {
    const dosages = [];


    for (let morning = 0; morning <= 1; morning++) {
      for (let noon = 0; noon <= 1; noon++) {
        for (let night = 0; night <= 1; night++) {
          const dosageString = `${morning}-${noon}-${night}`;
          dosages.push(dosageString);
        }

      }
    }

    return dosages;
  }

  calculateMedicineQuantity(): void {
    const dosageParts = this.diagnosisService.formData.Dosage.split('-').map(part => +part);
    const days = this.diagnosisService.formData.DosageDays;

    // Calculate the sum of dosage parts
    const sumOfDosageParts = dosageParts.reduce((sum, part) => sum + part, 0);

    // Calculate the medicine quantity
    this.medicineQuantity = sumOfDosageParts * days;
  }

  ViewPatientDetails() {
    if (this.AppointmentID) {
      this.router.navigate(['d-doctor/detail', this.AppointmentID]);
    }
  }
}
