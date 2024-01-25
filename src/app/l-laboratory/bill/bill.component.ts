import { Component, OnInit } from '@angular/core';
import { LReportViewModelService } from 'src/app/Shared/lreport-view-model.service';
import{Router} from '@angular/router'
import { LPrescriptionViewModelService } from 'src/app/shared/lprescription-view-model.service';
import { ReportGenerationService } from 'src/app/shared/report-generation.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  constructor(
    public lLabReportVMService: LReportViewModelService,  private router : Router,
    public labtestvmService: LPrescriptionViewModelService,public labReportGenerationService:ReportGenerationService) { }

  ngOnInit(): void {
    console.log('welcome to life cycle hook');
    this.lLabReportVMService.BindListReport();
  }
  generateBill() {
  // Assuming you want to pre-fill some fields in labreportService.formData_L
     

  // Navigate to the lab report form
  this.router.navigate(['/l-laboratory/bill'])
  }
 


printLabReport() {
  // You can implement the print logic here
  alert('Please connect the printer.');
  window.print();
}
back() {
  this.router.navigate(['/l-laboratory/report']);
  }


}
