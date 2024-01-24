import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLabprecComponent } from './list-labprec/list-labprec.component';
import { ListReportComponent } from './list-report/list-report.component';
import { AddReportComponent } from './add-report/add-report.component';
import { BillComponent } from './bill/bill.component';
import { ViewReportComponent } from './view-report/view-report.component';


const routes: Routes = [
  {path:'list',component:ListLabprecComponent},
  {path:'report',component:ListReportComponent},
  {path:'add',component:AddReportComponent},
  {path:'bill',component:BillComponent},
  {path:'view',component:ViewReportComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LLaboratoryRoutingModule { }
