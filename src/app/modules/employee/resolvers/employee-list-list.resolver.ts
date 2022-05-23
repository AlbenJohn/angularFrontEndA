import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { EmployeeListService } from '../services/employee-list.service';
import { employeeListListSuccessAction } from '../store/employee-list.actions';
import { EmployeeListState } from '../store/employee-list.state';

@Injectable({
  providedIn: 'root'
})

export class EmployeeListDetailsResolver implements Resolve<any>{

  constructor(private service:  EmployeeListService , private store: Store<EmployeeListState> ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const payload = {};

    return this.service.getEmployeeListsList(payload).pipe(
      map((response: any) => {
        this.store.dispatch(employeeListListSuccessAction(response)); 
        return response;
      })
    );
  }
}
