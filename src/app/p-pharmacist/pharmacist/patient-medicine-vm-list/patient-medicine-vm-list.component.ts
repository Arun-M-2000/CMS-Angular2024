import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PPatientsMedViewModelService } from 'src/app/Shared/ppatients-med-view-model.service';

@Component({
  selector: 'app-patient-medicine-vm-list',
  templateUrl: './patient-medicine-vm-list.component.html',
  styleUrls: ['./patient-medicine-vm-list.component.scss']
})
export class PatientMedicineVMListComponent implements OnInit {
  regNo: string | null = null;
  showBillModal: boolean = false;
  billDetails: any = {};

  constructor(
    public ppatientsMedViewModelService: PPatientsMedViewModelService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.regNo = params['regNo'];
      if (this.regNo) {
        // Fetch patient medicine details based on regNo
        this.ppatientsMedViewModelService.getPatientMedicineDetails(this.regNo).subscribe(
          data => {
            this.ppatientsMedViewModelService.patients = data;
          },
          error => {
            console.error('Error fetching patient medicine details:', error);
          }
        );
      }
    });
  }

  generateBill(pat: any): void {
    this.billDetails = {
      billDate: new Date().toLocaleDateString(),
      patientName: pat.PatientName,
      medicineName: pat.PrescribedMedicine,
      quantity: pat.DosageDays, // Update with the correct property
      unitPrice: pat.MedicineQuantity, // Update with the correct property
      gst: pat.MedicineQuantity * 0.08, // Assuming 8% GST
      totalPrice: pat.MedicineQuantity * pat.DosageDays // Update with the correct property
    };

    // Show the bill modal
    this.showBillModal = true;
  }

  printBill(): void {
    window.print();
    this.closeBillModal();
  }

  closeBillModal(): void {
    // Hide the bill modal
    this.showBillModal = false;
  }
}
