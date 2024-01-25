import { Component, OnInit } from '@angular/core';
import { LReportViewModelService } from 'src/app/Shared/lreport-view-model.service';
import { LPrescriptionViewModelService } from 'src/app/shared/lprescription-view-model.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {

  constructor(public lLabReportVMService:LReportViewModelService,
    public lLabTestsVMService:LPrescriptionViewModelService,
    private toastr: ToastrService,
    private router:Router)    // public lgetidvmService:LGetIDVMService)
 { }

    

  ngOnInit(): void {
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

 
  InsertRecord(form: NgForm){
    console.log("inserting");
    this.lLabReportVMService.insertLabReport(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form);
        //alert
        this.toastr.success('added successFully','CMS App 2024');
        this.router.navigate(['lablist']);
      }
    )

  }


  resetForm(form:NgForm){
    if(form!=null){
     form.resetForm(); 

}
}

generateReport() {
  
// Navigate to the lab report form
this.router.navigate(['/l-laboratory/report']);
}

back() {
  this.router.navigate(['/l-laboratory/list']);
}
}