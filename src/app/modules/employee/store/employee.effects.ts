import { Injectable } from "@angular/core";
import { Effect, Actions, ofType,createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, tap} from 'rxjs/operators';
import * as employeeActions from './employee.actions';
import { EmployeeState } from './employee.state';
import { EmployeeService } from '../services/employee.service';
@Injectable({
  providedIn: 'root'
})
export class employeeEffects {
  constructor(
    private actions$: Actions,
    private store: Store<EmployeeState>,
    private service: EmployeeService) {

  }

  queryEmployeeList$ =  createEffect(() => this.actions$.pipe(
    ofType(employeeActions.employeeListRequestAction),
    switchMap((req: any) => {
      return this.service.getEmployeesList().pipe(
        map((resp: any) => employeeActions.employeeListSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(employeeActions.employeeListFailedAction(resp))))
  );

 queryEmployeeDetails$ = createEffect(() => this.actions$.pipe(
    ofType(employeeActions.employeeDetailsRequestAction),
    switchMap((req: any) => {
      return this.service.getEmployeesList().pipe(
        map((resp: any) => employeeActions.employeeDetailsSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(employeeActions.employeeDetailsFailedAction(resp))))
  );


  deleteEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(employeeActions.employeeDeleteRequestAction),
    switchMap((req: any) => {
      return this.service.deleteEmployee(req.id).pipe(
        map((resp: any) => employeeActions.employeeDeleteSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(employeeActions.employeeDeleteFailedAction(resp.error))))
  );

  saveEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(employeeActions.employeeCreateRequestAction),
    switchMap((req: any) => {
      return this.service.saveEmployee(req.payload).pipe(
        map((resp: any) => employeeActions.employeeCreateSuccessAction)
      );
    }),
    catchError((resp: any) => of(employeeActions.employeeCreateFailedAction(resp.error))))
  );

  updateEmployee$ =  createEffect(() => this.actions$.pipe(
    ofType(employeeActions.employeeUpdateRequestAction),
    switchMap((req: any) => {
      return this.service.saveEmployee(req.payload).pipe(
        map((resp: any) => employeeActions.employeeUpdateSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(employeeActions.employeeUpdateFailedAction(resp.error))))
  );

  filterEmployeeList$ = createEffect(() => this.actions$.pipe(
    ofType(employeeActions.employeeFilterRequestAction),
    switchMap((req: any) => of(employeeActions.employeeFilterSuccessAction(req.filter))),
    catchError((resp: any) => of(employeeActions.employeeFilterFailedAction(resp.error))))
  );

  sortEmployeeList$ = createEffect(() => his.actions$.pipe(
    ofType(employeeActions.employeeSortingRequestAction),
    switchMap((req: any) => of(employeeActions.employeeSortingSuccessAction(req.sorting))),
    catchError((resp: any) => of(employeeActions.employeeSortingFailedAction(resp.error))))
  );
}
