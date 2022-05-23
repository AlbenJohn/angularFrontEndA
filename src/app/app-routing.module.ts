import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:"modules/employee",pathMatch:"full"},
  { path: 'modules/employee', loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)},
  { path: 'modules/register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
