import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { companyReducer } from './store/company.reducers';
import { companyEffects } from './store/company.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects"; 

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    CompanyRoutingModule,
    StoreModule.forFeature('company', companyReducer),
    EffectsModule.forFeature([companyEffects]),  ],
  exports:[],
  providers:[]
})
export class CompanyModule {}
