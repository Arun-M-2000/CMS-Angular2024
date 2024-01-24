import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AMedicineRoutingModule } from './a-medicine-routing.module';
import { MedicineComponent } from './medicine/medicine.component';
import { ListMedicineComponent } from './medicine/list-medicine/list-medicine.component';
import { AddMedicineComponent } from './medicine/add-medicine/add-medicine.component';
import { EditMedicineComponent } from './medicine/edit-medicine/edit-medicine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [MedicineComponent, ListMedicineComponent, AddMedicineComponent, EditMedicineComponent],
  imports: [
    CommonModule,
    AMedicineRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(
      {
      timeOut:10000,
      positionClass:'toast-top-right',
      preventDuplicates:true
      })
  ]
})
export class AMedicineModule { }
