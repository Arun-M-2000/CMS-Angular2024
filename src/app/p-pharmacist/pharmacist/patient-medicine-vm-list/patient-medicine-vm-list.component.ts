    //  patient-medicine-vm-list.component.ts

    import { Component, OnInit } from '@angular/core';
    import { ActivatedRoute } from '@angular/router';
    import { PPatientsMedViewModelService } from 'src/app/Shared/ppatients-med-view-model.service';
    import { Router } from '@angular/router'; // Import the Router module
    
    @Component({
      selector: 'app-patient-medicine-vm-list',
      templateUrl: './patient-medicine-vm-list.component.html',
      styleUrls: ['./patient-medicine-vm-list.component.scss']
    })
    export class PatientMedicineVMListComponent implements OnInit {
      regNo: string | null = null;
      showBillModal: boolean = false;
      billDetails: any = {};
      AppointmentId:number;
      gst:number=0.08;
      listPatientRecord = [];
      unitPrice: number;
      totalAmount: number;
      patientname:string;
      totalPrice:number;

     
      billContent:string;
      dialog:any;
      viewClicked: boolean;
      
      constructor(
        public ppatientsMedViewModelService: PPatientsMedViewModelService,
        private route: ActivatedRoute,  private router: Router 
      ) { }
    
      ngOnInit(): void {
        this.AppointmentId = this.route.snapshot.params['AppointmentId'];
    
       this.ppatientsMedViewModelService.BindListPatientMedicine(this.AppointmentId) 
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
      }generateBill(pat: any): void {
        this.ppatientsMedViewModelService.formData.PatientName = pat.PatientName,
        this.ppatientsMedViewModelService.formData.Age= pat.Age
      
        // Pass the selected patient's details to the billDetails object
        this.billDetails = {
          billDate: new Date().toLocaleDateString(),
          patientName: pat.PatientName,
          medicineName: pat.PrescribedMedicine,
          quantity: pat.MedicineQuantity,
          unitPrice: pat.UnitPrice,
          totalPrice:pat.MedicineQuantity * pat.UnitPrice,
          gst: pat.MedicineQuantity * pat.UnitPrice * 0.08,
          //totalPrice: (pat.MedicineQuantity * pat.UnitPrice) + (pat.MedicineQuantity * pat.UnitPrice * 0.08)
          totalAmount:(pat.MedicineQuantity * pat.UnitPrice) + (pat.MedicineQuantity * pat.UnitPrice * 0.08)

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
      view(AppointmentId:number) {
           
        this.router.navigate(['/p-pharmacist/patientmedicine-list/'+AppointmentId]);
      }
    
      getViewPatient(patient): void {
        this.viewClicked = true;
        this.listPatientRecord.push(patient);
      }
    
    
      getCurrentDate(): string {
        const currentDate = new Date();
        return currentDate.toLocaleDateString();
      }
      back(){
        this.router.navigateByUrl("p-pharmacist/patient-list");
          }
          printLabReport() {
            // You can implement the print logic here
            alert('Please connect the printer.');
            window.print();
          }

        
    
    }
    