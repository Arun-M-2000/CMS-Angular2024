import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PPharmacistRoutingModule } from './p-pharmacist-routing.module';
import { PharmacistComponent } from './pharmacist/pharmacist.component';


@NgModule({
  declarations: [PharmacistComponent],
  imports: [
    CommonModule,
    PPharmacistRoutingModule
  ]
})
export class PPharmacistModule { }
