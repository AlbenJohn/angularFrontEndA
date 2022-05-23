import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ApiServices } from 'src/app/shared/services/apiservices';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { CommondialogComponent } from 'src/app/shared/commondialog/commondialog.component';
import { select, Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { selectEmployeeListsList, selectEmployeeListDetailsSuccess, selectEmployeeListSucees, selectFilterchanges } from './store/employee-list.selectors';
import { EmployeeListState } from './store/employee-list.state';
import { employeeListCreateRequestAction, employeeListDeleteRequestAction, employeeListDetailsRequestAction, employeeListFilterRequestAction, employeeListListRequestAction, employeeListPaginaitonRequestAction, employeeListUpdateRequestAction } from './store/employee-list.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class EmployeeComponent implements OnInit {

  @ViewChild('employeeTable',{static :false}) empTable:DatatableComponent
  rows:any = [];
  selectedEmployee:string = ''
  bsModalRef?: BsModalRef;


  subscriptions: Subscription[] = [];

  getEmplListSuccess$: Observable<any> = this.EmpStore$.pipe(
     select(selectEmployeeListsList)
  );

  getEmplDetails$: Observable<any> = this.EmpStore$.pipe(
    select(selectEmployeeListDetailsSuccess)
 );


 getSuceess$: Observable<any> = this.EmpStore$.pipe(
  select(selectEmployeeListSucees)
);


getSuceessAfterFilter$: Observable<any> = this.EmpStore$.pipe(
  select(selectFilterchanges)
);



  constructor(public router:Router,
    private apiservice:ApiServices,
    private modalService: BsModalService,
    private EmpStore$: Store<EmployeeListState>,) { }

  // ngOnInit(): void {
  //   this.fetch((data:any) => {
  //     this.rows = data;
  //   });
  // }

  RefreshData(){
    this.getData();
  }

  // fetch(cb:any) {
  //   const req = new XMLHttpRequest();
  //   req.open('GET', `https://retoolapi.dev/DV6x5A/employees`);

  //   req.onload = () => {
  //     const data = JSON.parse(req.response);
  //     cb(data);
  //   };

  //   req.send();
  // }
  EditButtonClicked(row:any){

    this.apiservice.getEmployeeByID(row.id).subscribe(results =>{

      const initialState: ModalOptions = {
        initialState: {
          list: [
            'Open a modal with component',
            'Pass your data',
            'Do something else',
            '...'
          ],
          title: 'Modal with component',
          data:results
        },
        backdrop: 'static',
        class: 'modal-lg',
        animated: true
      };
      this.bsModalRef = this.modalService.show(CommondialogComponent, initialState);
      this.bsModalRef.content.closeBtnName = 'Close';
    })

   
  }
  GotoRegistration(){
    this.router.navigate(['/modules/register'])
  }
  // updateFilter(selectedEmployee:any){
  //     this.apiservice.UpdateEmployeeSearch(selectedEmployee).subscribe(result =>{
  //         console.log('search results',result)
  //         this.rows = result;
  //     })
  // }
  
  ngOnInit(): void {
    this.initSubscribers(); 
    this.getEmplListSuccess$.subscribe(data => {  console.log(data);   }); 
    this.getData();

 

  }

  ngAfterViewInit(): void {
  
  }


  getData(): void{
    this.EmpStore$.dispatch(employeeListListRequestAction({payload:''}));
  }

  getDataWithPagination(): void{
    this.EmpStore$.dispatch(employeeListPaginaitonRequestAction({payload:{page:2,limit:10}}));
  }


  getDetails(): void{
    this.EmpStore$.dispatch(employeeListDetailsRequestAction({payload:'6'}));
  }

  delete(row:any): void{
    this.EmpStore$.dispatch(employeeListDeleteRequestAction({payload:row.id}));
  }

  filter(): void{
    console.log(this.selectedEmployee)
    this.EmpStore$.dispatch(employeeListFilterRequestAction({payload:{payload:this.selectedEmployee}}));
  }
  searchName(event:any){
    this.selectedEmployee = event;
  }

  saveNew(){
    let obj = {
      company: "TEST COMPNAY134",
dob: "Sep 03, 1995 7:11 PM",
email: "troebottom6m@cbsnews.com",
fullName: "Alben John",
gender: false,
phone: "(555) 262-4435",
position: "Outbound BDR",
    }
    this.EmpStore$.dispatch(employeeListCreateRequestAction({payload:obj}));
  }


  update(){
    let obj = {
      company: "TETTTTTTTT",
dob: "Sep 03, 1995 7:11 PM",
email: "troebottom6m@cbsnews.com",
fullName: "ALBVEN",
gender: false,
id: "6",
phone: "(555) 262-4435",
position: "Outbound BDR",
    }
    this.EmpStore$.dispatch(employeeListUpdateRequestAction({payload:obj}));
  }

  DeleteButtonClicked(row:any){}

  initSubscribers(): any {

    // gettting all the employess
    this.subscriptions.push(this.getEmplListSuccess$.subscribe(data => {     
        //  console.log(data);  
         console.log(data);  

         this.rows = data[0];

    }));


   // geting details by id
    this.subscriptions.push(this.getEmplDetails$.subscribe(data => {     
      console.log(data);      
    }));


     // All the success after Create New & Update & delete
     this.subscriptions.push(this.getSuceess$.subscribe(data => {     
      console.log('records',data);     
      this.getData(); 
    }));


       // All the success after Filter
       this.subscriptions.push(this.getSuceessAfterFilter$.subscribe(data => {     
        console.log(data);     
      }));
    
    

  }

}
