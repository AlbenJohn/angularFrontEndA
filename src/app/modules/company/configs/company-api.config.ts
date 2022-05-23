import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CompanyApiConfig {
  constructor() { }

  COMPANY = (id?: any): string => `/${id}`;
}
