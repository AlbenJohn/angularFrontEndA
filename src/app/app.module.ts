import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiServices } from './shared/services/apiservices';
import { CommondialogComponent } from './shared/commondialog/commondialog.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { employeeListReducer } from './modules/employee/store/employee-list.reducers';
import { employeeListEffects } from './modules/employee/store/employee-list.effects';

@NgModule({
  declarations: [
    AppComponent,
    CommondialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot([employeeListReducer]),
    EffectsModule.forRoot([employeeListEffects]),
    NgxDatatableModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()


  ],
  providers: [ApiServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
