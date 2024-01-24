import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RAppointmentRoutingModule } from './r-appointment-routing.module';
import { AppointmentComponent } from './appointment/appointment.component';


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppointmentComponent],
  imports: [
    CommonModule,
    RAppointmentRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,

    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RAppointmentModule { }
