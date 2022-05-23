import { initialCompanyState, CompanyState } from './company.state';
import * as companyActions from './company.actions';
import { Action,createReducer, on } from '@ngrx/store';

const companyReducersCases =  createReducer(
  initialCompanyState,

  //#region Company List Case
  on(companyActions.companyListRequestAction, state => ({ ...state })),
  on(companyActions.companyListSuccessAction, (state,resp) => ({ ...state, companyList:resp.response, errors:null })),
  on(companyActions.companyListFailedAction, (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region Company Details Case
  on(companyActions.companyDetailsRequestAction, state => ({ ...state })),
  on(companyActions.companyDetailsSuccessAction, (state,resp) => ({ ...state, companyDetails:resp.response, errors:null })),
  on(companyActions.companyDetailsFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region Company Delete Case
  on(companyActions.companyDeleteRequestAction, state => ({ ...state })),
  on(companyActions.companyDeleteSuccessAction, (state,resp) => ({ ...state, errors:null })),
  on(companyActions.companyDeleteFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region Company Create Case
  on(companyActions.companyCreateRequestAction, state => ({ ...state })),
  on(companyActions.companyCreateSuccessAction, (state,resp) => ({ ...state, errors:null })),
  on(companyActions.companyCreateFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region Company Update Case
  on(companyActions.companyUpdateRequestAction, state => ({ ...state })),
  on(companyActions.companyUpdateSuccessAction, (state,resp) => ({ ...state, errors:null })),
  on(companyActions.companyUpdateFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region Company Filter Case
  on(companyActions.companyFilterRequestAction, state => ({ ...state })),
  on(companyActions.companyFilterSuccessAction, (state,resp) => ({ ...state, filters:resp.filter, errors:null })),
  on(companyActions.companyFilterFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region Company Sorting Case
  on(companyActions.companySortingRequestAction, state => ({ ...state })),
  on(companyActions.companySortingSuccessAction, (state,resp) => ({ ...state, sorting:resp.sorting, errors:null })),
  on(companyActions.companySortingFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion
);

export function companyReducer(state: CompanyState | undefined, action: Action) {
  return companyReducersCases(state, action);
}