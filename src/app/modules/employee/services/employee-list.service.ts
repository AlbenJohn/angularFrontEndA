import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { EmployeeListApiConfig } from "../configs/employee-list-api.config";

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  constructor(private http:HttpClient,private api:EmployeeListApiConfig) {

  }

  getEmployeeListsList(payload?: any){
    return this.http.get(this.api.GET_EMPLOYEELIST());
  }

  getEmployeeListsListWithPagination(payload?: any){
    return this.http.get(this.api.GET_EMPLOYEELIST_WITHPAGINATION(payload.page, payload.limit));
  }

  

  getEmployeeListDetails(id:any){
    return this.http.get(this.api.EMPLOYEE_LIST_DETAILS(id));
  }

  saveEmployeeList(payload:any) {
    return this.http.post('https://retoolapi.dev/DV6x5A/employees',payload);
  }

  updateEmployeeList(payload:any) {
    return this.http.put(this.api.UPDATE_EMPLOYE(payload.id),payload);
  }

  deleteEmployeeList(id:any){
    return this.http.delete(this.api.DELETE_EMPLOYE(id));
  }


  filteremployee(name:any){
    return this.http.get(this.api.FILTER_LIST(name));
  }

}
