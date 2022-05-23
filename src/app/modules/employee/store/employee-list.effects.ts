import { Injectable } from "@angular/core";
import { Effect, Actions, ofType,createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, tap, exhaustMap} from 'rxjs/operators';
import { EmployeeListService } from "../services/employee-list.service";
import { EmployeeListState } from "./employee-list.state";
import * as employeeListActions from './employee-list.actions';

@Injectable({
  providedIn: 'root'
})
export class employeeListEffects {
  constructor(
    private actions$: Actions,
    private store: Store<EmployeeListState>,
    private service: EmployeeListService) {

  }


  // get full emp list
  //get full emp list
  queryEmployeeListList$ =  createEffect(() => this.actions$.pipe(
    ofType(employeeListActions.employeeListListRequestAction),
    switchMap((req: any) => {
      return this.service.getEmployeeListsList(req).pipe(
        map((resp: any) => employeeListActions.employeeListListSuccessAction(this.formatFn(resp)))
      );
    }),
    catchError((resp: any) => of(employeeListActions.employeeListListFailedAction(resp))))
  );

    
formatFn(resp: any): any{
  let arr = [];
  arr.push(resp)
  return arr;
}

  // get with pagination
  queryEmployeeListWithPaginaiton$ =  createEffect(() => this.actions$.pipe(
    ofType(employeeListActions.employeeListPaginaitonRequestAction),
    switchMap((req: any) => {
      return this.service.getEmployeeListsListWithPagination(req.payload).pipe(
        map((resp: any) => employeeListActions.employeeListListSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(employeeListActions.employeeListListFailedAction(resp))))
  );



  // get emp details
 queryEmployeeListDetails$ = createEffect(() => this.actions$.pipe(
    ofType(employeeListActions.employeeListDetailsRequestAction),
    switchMap((req: any) => {
      return this.service.getEmployeeListDetails(req.payload.payload).pipe(
        map((resp: any) => employeeListActions.employeeListDetailsSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(employeeListActions.employeeListDetailsFailedAction(resp))))
  );
  formatDn(resp: any): any{
    let arr = [];
    arr.push(resp)
    return arr;
  }

  // del emp
  deleteEmployeeList$ = createEffect(() => this.actions$.pipe(
    ofType(employeeListActions.employeeListDeleteRequestAction),
    switchMap((req: any) => {
      return this.service.deleteEmployeeList(req.payload).pipe(
        map((resp: any) => employeeListActions.employeeListDeleteSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(employeeListActions.employeeListDeleteFailedAction(resp.error))))
  );


  // save emp
  saveEmployeeList$ = createEffect(() => this.actions$.pipe(
    ofType(employeeListActions.employeeListCreateRequestAction),
    switchMap((req: any) => {
      return this.service.saveEmployeeList(req.payload).pipe(
        map((resp: any) => employeeListActions.employeeListCreateSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(employeeListActions.employeeListCreateFailedAction(resp.error))))
  );







  // update emp
  updateEmployeeList$ =  createEffect(() => this.actions$.pipe(
    ofType(employeeListActions.employeeListUpdateRequestAction),
    switchMap((req: any) => {
      return this.service.updateEmployeeList(req.payload).pipe(
        map((resp: any) => employeeListActions.employeeListUpdateSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(employeeListActions.employeeListUpdateFailedAction(resp.error))))
  );

  

  // get emp details
  filterEmployeeListLists$ = createEffect(() => this.actions$.pipe(
  ofType(employeeListActions.employeeListFilterRequestAction),
  switchMap((req: any) => {
    return this.service.filteremployee(req.payload.payload).pipe(
      map((resp: any) => employeeListActions.employeeListFilterSuccessAction(this.formatDn(resp)))
    );
  }),
  catchError((resp: any) => of(employeeListActions.employeeListFilterFailedAction(resp))))
);


}
