import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenusRoutingModule } from './venus-routing.module';
import { VenusBasecomponentComponent } from './venus-basecomponent/venus-basecomponent.component';
import { VenusHomeComponent } from './venus-home/venus-home.component';


@NgModule({
  declarations: [VenusBasecomponentComponent, VenusHomeComponent],
  imports: [
    CommonModule,
    VenusRoutingModule
  ]
})
export class VenusModule { }
