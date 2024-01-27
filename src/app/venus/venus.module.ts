import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenusRoutingModule } from './venus-routing.module';
import { VenusBasecomponentComponent } from './venus-basecomponent/venus-basecomponent.component';
import { VenusHomeComponent } from './venus-home/venus-home.component';
import { VenusWholeLoginComponent } from './venus-whole-login/venus-whole-login.component';


@NgModule({
  declarations: [VenusBasecomponentComponent, VenusHomeComponent, VenusWholeLoginComponent],
  imports: [
    CommonModule,
    VenusRoutingModule
  ]
})
export class VenusModule { }
