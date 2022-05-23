import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { employeeListDetailsSuccessAction } from '../store/employee-list.actions';
import { EmployeeListState } from '../store/employee-list.state';
import { EmployeeListService } from '../services/employee-list.service';

@Injectable({
  providedIn: 'root'
})

export class EmployeeListDetailsResolver implements Resolve<any>{

  constructor(private service:  EmployeeListService , private store: Store<EmployeeListState>) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');

    return this.service.getEmployeeListDetails(id).pipe(
      map((response: any) => {
         this.store.dispatch(employeeListDetailsSuccessAction(response)); 
        return response;
      })
    );
  }
}
