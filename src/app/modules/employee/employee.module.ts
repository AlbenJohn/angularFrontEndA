import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { employeeReducer } from './store/employee.reducers';
import { employeeEffects } from './store/employee.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects"; 

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    EmployeeRoutingModule,
    StoreModule.forFeature('employee', employeeReducer),
    EffectsModule.forFeature([employeeEffects]),  ],
  exports:[],
  providers:[]
})
export class EmployeeModule {}
