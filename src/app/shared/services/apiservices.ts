import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn:"root"
})
export class ApiServices{
    public liveloadjsonurl:any = '../assets/';

    USER_DETAILS = "userdetails";
    constructor(private httpclient:HttpClient){}

    //sample api call for interceptor
    JSONcolumoptions(name:any)
  {
      let url = this.liveloadjsonurl+name+'.json'
      return new Promise(resolve =>{
        return this.httpclient.get(url).subscribe(result=>{
         resolve(result)
        })
      })
  }

    //get userdetails from local
    public getuser(){
        const user = JSON.parse(localStorage.getItem(this.USER_DETAILS)) 
        return user;
    }
    isAutheciated(){
      const user = JSON.parse(localStorage.getItem(this.USER_DETAILS)) 
      return user ? true : false;
    }

    //Login Api Call
    public loginapicall(username:any,password:any){
        return this.httpclient.post("",{username,password});
    }

    //register api call
    public registerApiCall(username:any,emailid:any,password:any){
        return this.httpclient.post("",{username,emailid,password})
    }

    public UpdateEmployeeSearch(fullname:any):Observable<any>{
      const url =`https://retoolapi.dev/DV6x5A/employees?fullName=${fullname}`;
      return this.httpclient.get(url);
    }
    public getEmployeeByID(id:any):Observable<any>{
      const url =`https://retoolapi.dev/DV6x5A/employees/${id}`;
      return this.httpclient.get(url);
    }
}