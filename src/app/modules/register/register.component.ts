import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { employeeListCreateRequestAction } from '../employee/store/employee-list.actions';
import { EmployeeListState } from '../employee/store/employee-list.state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error:string | undefined;
  registerForm:FormGroup;

  constructor(private rf:FormBuilder,private router:Router,
    private EmpStore$: Store<EmployeeListState>) { }

  ngOnInit(): void {
    this.registerformbuilder();
  }
  get registerformCotrls():any{
    return this.registerForm.controls;
  }


  private registerformbuilder():void{
    this.registerForm = this.rf.group({
      fullName:["",[Validators.required,Validators.minLength(4)]],
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
      }
        console.log(obj)
       this.EmpStore$.dispatch(employeeListCreateRequestAction({payload:obj}));
       this.registerForm.reset();

    }
  }
  GoHome(){
    this.router.navigate(['/modules/employee'])
  }

  saveNew(){
   
  }

}
