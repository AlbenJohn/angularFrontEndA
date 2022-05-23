import { Injectable } from "@angular/core";
import { EmployeeApiConfig } from '../configs/employee-api.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http:HttpClient,private api:EmployeeApiConfig) {

  }

  getEmployeesList(payload?: any){
    return this.http.get(this.api.EMPLOYEE());
  }

  getEmployeeDetails(id:any){
    return this.http.get(this.api.EMPLOYEE(id));
  }

  saveEmployee(payload:any) {
    return this.http.post(this.api.EMPLOYEE(),payload);
  }

  updateEmployee(payload:any) {
    return this.http.put(this.api.EMPLOYEE(),payload);
  }

  deleteEmployee(id:any){
    return this.http.delete(this.api.EMPLOYEE(id));
  }

}
