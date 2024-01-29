import { Component, OnInit } from '@angular/core';
import { LReportViewModelService } from 'src/app/Shared/lreport-view-model.service';
import { LPrescriptionViewModelService } from 'src/app/shared/lprescription-view-model.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import{LIDViewModel} from 'src/app/Shared/lidview-model';
import{LIDViewModelService} from 'src/app/Shared/lidview-model.service'
import { ReportGenerationService } from 'src/app/shared/report-generation.service';
@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {
  lGetIDVM: LIDViewModel[];
  getidvm1: LIDViewModel = new LIDViewModel();
  generatedReport: any;
  reportTable: any[] = [];
  staffId: number = 1037;
  TestId: number = 502;
  minDate: string;
  maxDate: string;

  constructor(public lLabReportVMService:LReportViewModelService,
    public lLabTestsVMService:LPrescriptionViewModelService,
    private toastr: ToastrService,
    private router:Router,
    public lgetidvmService:LIDViewModelService,
    private route:ActivatedRoute,
    public labreportgeneration:ReportGenerationService)    // public lgetidvmService:LGetIDVMService)
 { }
 getCurrentDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
  }

    

  ngOnInit(): void {
    // Retrieve the query parameters from the route
    const queryParams = this.route.snapshot.queryParams;

    // Now queryParams contains the values passed in the URL
    console.log('Query Parameters:', queryParams);

    // Use the values as needed
    this.labreportgeneration.formData.AppointmentId = queryParams.AppointmentId;

    // Now 'lab' contains the object passed from the list page
    console.log('Lab Object:', this.lLabTestsVMService.formData);
    this.lgetidvmService.BindListIDVM(this.lLabTestsVMService.formData.AppointmentId).subscribe(
      (data) => {
        console.log(data);
  
        if (data && Object.keys(data).length > 0) {
          this.getidvm1 = data;
          this.lgetidvmService.getidvm1 = { ...data };
          console.log(this.lgetidvmService.getidvm1);
        } else {
          console.error('No data received from BindListIDVM');
        }
      },
      (error) => console.log(error)
    );

    if (this.lGetIDVM && this.lGetIDVM.length > 0) {
      this.labreportgeneration.formData.StaffId = this.lGetIDVM[0].StaffId;
      this.labreportgeneration.formData.TestId = this.lGetIDVM[0].TestId;
    }

  }


  onSubmit(form: NgForm){  
    let addId =this.lLabReportVMService.formData.ReportId;
    if(addId ==0 || addId == null){
      console.log(form.value);
      this.InsertRecord(form);
    }
    else{
      //this.updateRecord(form);
    }
  }

 
  InsertRecord(form: NgForm) {
    console.log('inserting');
    this.labreportgeneration.insertLabReport(form.value).subscribe(
      (result) => {
        console.log(result);
        

        this.resetForm(form);
        // alert
        this.toastr.success('Added successfully', 'CMS App 2024');
        this.router.navigate(['l-laboratory/report'], { state: { data: this.generatedReport } });
      },
      (error) => {
        console.error('Error inserting record:', error);
      }
    );
  }

  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }


generateReport() {
  
// Navigate to the lab report form
this.router.navigate(['/l-laboratory/report']);
}

goBack() {
  this.router.navigate(['/l-laboratory/list']);
}
}