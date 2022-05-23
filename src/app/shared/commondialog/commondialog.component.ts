import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {  employeeListUpdateRequestAction } from 'src/app/modules/employee/store/employee-list.actions';
import { EmployeeListState } from 'src/app/modules/employee/store/employee-list.state';

@Component({
  selector: 'app-commondialog',
  templateUrl: './commondialog.component.html',
  styleUrls: ['./commondialog.component.css']
})
export class CommondialogComponent implements OnInit {
  error:string | undefined;
  registerForm:FormGroup;
  data:any = [];
  constructor( public modalRef: BsModalRef,
    private rf:FormBuilder,private EmpStore$: Store<EmployeeListState>) { 
    // console.log("Modal reference", modalRef.content.data)
  }

  ngOnInit(): void {
    this.registerformbuilder();
    console.log("Modal reference", this.data)


    this.registerForm.patchValue({fullName:this.data.fullName,
          email:this.data.email,
          phone:this.data.phone,
          company:this.data.company,
          dob:this.data.dob,
          gender:this.data.gender,
          position:this.data.position})
  }
  get registerformCotrls():any{
    return this.registerForm.controls;

  }


  private registerformbuilder():void{
    this.registerForm = this.rf.group({
      fullName:["",[Validators.required]],
      email:["",[Validators.required,Validators.email]],
      phone:["",[Validators.required,Validators.pattern(/[0-9\+\-\ ]/)]],
      company:["",[Validators.required]],
      dob:["",[Validators.required]],
      gender:["",[Validators.required]],
      position:["",[Validators.required]]

    })
  }
  public register():void{
    if(this.registerForm.valid){
        let obj = {
          company: this.registerForm.controls.company.value,
          dob: "Sep 03, 1995 7:11 PM",
          email: this.registerForm.controls.email.value,
          fullName: this.registerForm.controls.fullName.value,
          gender: this.registerForm.controls.gender.value == 'male' ? false : true,
          phone: this.registerForm.controls.phone.value,
          position: this.registerForm.controls.position.value,
          id:this.data.id
        }
          console.log(obj)
          this.EmpStore$.dispatch(employeeListUpdateRequestAction({payload:obj}));
          this.registerForm.reset();
          this.modalRef.hide();
      
    }
  }


}
