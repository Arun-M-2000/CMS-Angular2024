import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ALabRoutingModule } from './a-lab-routing.module';
import { LabComponent } from './lab/lab.component';
import { ListLabComponent } from './list-lab/list-lab.component';
import { AddLabComponent } from './add-lab/add-lab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditLabComponent } from './edit-lab/edit-lab.component';






@NgModule({
  declarations: [LabComponent, ListLabComponent, AddLabComponent, EditLabComponent],
  imports: [
    CommonModule,
    ALabRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
      timeOut:10000,
      positionClass:'toast-top-right',
      preventDuplicates:true
      }),
      NgxPaginationModule,
      Ng2SearchPipeModule
  ]
})
export class ALabModule { }
