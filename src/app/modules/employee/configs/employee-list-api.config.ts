import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EmployeeListApiConfig {
  constructor() { }


  GET_EMPLOYEELIST = (): string => `https://retoolapi.dev/DV6x5A/employees`;
  GET_EMPLOYEELIST_WITHPAGINATION = (page?:any, limit?:any): string => `https://retoolapi.dev/DV6x5A/employees?page=${page}&limit=${limit}`;
  EMPLOYEE_LIST_DETAILS = (id?: any): string => `https://retoolapi.dev/DV6x5A/employees/${id}`;

  UPDATE_EMPLOYE = (id?: any): string => `https://retoolapi.dev/DV6x5A/employees/${id}`;
  CREATE_NEW_EMPLOYE = (payload?: any): string => `https://retoolapi.dev/DV6x5A/employees}`;
  DELETE_EMPLOYE = (id?: any): string => `https://retoolapi.dev/DV6x5A/employees/${id}`;
  FILTER_LIST = (name: any): string => `https://retoolapi.dev/DV6x5A/employees?fullName=${name}`;



}
