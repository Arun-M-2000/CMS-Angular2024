import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

//Need to import
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
////////////////////////

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(
      {
      timeOut:10000,
      positionClass:'toast-top-right',
      preventDuplicates:true
      }),
      NgxPaginationModule,
      Ng2SearchPipeModule,
      HttpClientModule,
      ReactiveFormsModule,
      
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
