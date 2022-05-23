import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiConfig {
  constructor() { }

  EMPLOYEE = (id?: any): string => `/${id}`;
}
