import { Injectable } from "@angular/core";
import { Effect, Actions, ofType,createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, tap} from 'rxjs/operators';
import * as companyActions from './company.actions';
import { CompanyState } from './company.state';
import { CompanyService } from '../services/company.service';
@Injectable({
  providedIn: 'root'
})
export class companyEffects {
  constructor(
    private actions$: Actions,
    private store: Store<CompanyState>,
    private service: CompanyService) {

  }

  queryCompanyList$ =  createEffect(() => this.actions$.pipe(
    ofType(companyActions.companyListRequestAction),
    switchMap((req: any) => {
      return this.service.getCompanysList().pipe(
        map((resp: any) => companyActions.companyListSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(companyActions.companyListFailedAction(resp))))
  );

 queryCompanyDetails$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.companyDetailsRequestAction),
    switchMap((req: any) => {
      return this.service.getCompanysList().pipe(
        map((resp: any) => companyActions.companyDetailsSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(companyActions.companyDetailsFailedAction(resp))))
  );


  deleteCompany$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.companyDeleteRequestAction),
    switchMap((req: any) => {
      return this.service.deleteCompany(req.id).pipe(
        map((resp: any) => companyActions.companyDeleteSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(companyActions.companyDeleteFailedAction(resp.error))))
  );

  saveCompany$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.companyCreateRequestAction),
    switchMap((req: any) => {
      return this.service.saveCompany(req.payload).pipe(
        map((resp: any) => companyActions.companyCreateSuccessAction)
      );
    }),
    catchError((resp: any) => of(companyActions.companyCreateFailedAction(resp.error))))
  );

  updateCompany$ =  createEffect(() => this.actions$.pipe(
    ofType(companyActions.companyUpdateRequestAction),
    switchMap((req: any) => {
      return this.service.saveCompany(req.payload).pipe(
        map((resp: any) => companyActions.companyUpdateSuccessAction(resp))
      );
    }),
    catchError((resp: any) => of(companyActions.companyUpdateFailedAction(resp.error))))
  );

  filterCompanyList$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.companyFilterRequestAction),
    switchMap((req: any) => of(companyActions.companyFilterSuccessAction(req.filter))),
    catchError((resp: any) => of(companyActions.companyFilterFailedAction(resp.error))))
  );

  sortCompanyList$ = createEffect(() => his.actions$.pipe(
    ofType(companyActions.companySortingRequestAction),
    switchMap((req: any) => of(companyActions.companySortingSuccessAction(req.sorting))),
    catchError((resp: any) => of(companyActions.companySortingFailedAction(resp.error))))
  );
}
