import { Injectable } from "@angular/core";
import { CompanyApiConfig } from '../configs/company-api.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http:HttpClient,private api:CompanyApiConfig) {

  }

  getCompanysList(payload?: any){
    return this.http.get(this.api.COMPANY());
  }

  getCompanyDetails(id:any){
    return this.http.get(this.api.COMPANY(id));
  }

  saveCompany(payload:any) {
    return this.http.post(this.api.COMPANY(),payload);
  }

  updateCompany(payload:any) {
    return this.http.put(this.api.COMPANY(),payload);
  }

  deleteCompany(id:any){
    return this.http.delete(this.api.COMPANY(id));
  }

}
