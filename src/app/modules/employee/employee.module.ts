import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { employeeReducer } from './store/employee.reducers';
import { employeeEffects } from './store/employee.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { EmployeeComponent } from './employee.component'; 
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EmployeeGenderPipe } from 'src/app/shared/pipes/employeGender';
import { employeeListReducer } from './store/employee-list.reducers';
import { employeeListEffects } from './store/employee-list.effects';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeGenderPipe
  ],
  imports:[
    CommonModule,
    EmployeeRoutingModule,
    NgxDatatableModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    StoreModule.forFeature('employeeList', employeeListReducer),
    EffectsModule.forFeature([employeeListEffects]),
 ],
  exports:[],
  providers:[]
})
export class EmployeeModule {}
