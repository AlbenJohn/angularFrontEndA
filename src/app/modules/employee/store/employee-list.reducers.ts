import * as employeeListActions from './employee-list.actions';
import { Action,createReducer, on } from '@ngrx/store';
import { EmployeeListState, initialEmployeeListState } from './employee-list.state';

const employeeListReducersCases =  createReducer(
  initialEmployeeListState,

  //#region EmployeeList List Case
  on(employeeListActions.employeeListListRequestAction, state => ({ ...state })),
  on(employeeListActions.employeeListListSuccessAction, (state,resp) => ({ ...state, employeeListsList:resp, errors:null })),
  on(employeeListActions.employeeListListFailedAction, (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion



  on(employeeListActions.employeeListPaginaitonRequestAction, state => ({ ...state })),
  on(employeeListActions.mployeeListPaginaitonSuccessAction, (state,resp) => ({ ...state, employeeListsList:resp, errors:null })),
  on(employeeListActions.mployeeListPaginaitonFailedAction, (state,resp) => ({ ...state,errors:resp.error })),


  //#region EmployeeList Details Case
  on(employeeListActions.employeeListDetailsRequestAction, state => ({ ...state })),
  on(employeeListActions.employeeListDetailsSuccessAction, (state,resp) => ({ ...state, employeeListDetails:resp, errors:null })),
  on(employeeListActions.employeeListDetailsFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region EmployeeList Delete Case
  on(employeeListActions.employeeListDeleteRequestAction, state => ({ ...state })),
  on(employeeListActions.employeeListDeleteSuccessAction, (state,resp) => ({ ...state, success:resp, errors:null })),
  on(employeeListActions.employeeListDeleteFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region EmployeeList Create Case
  on(employeeListActions.employeeListCreateRequestAction, state => ({ ...state })),
  on(employeeListActions.employeeListCreateSuccessAction, (state,resp) => ({ ...state,  success:resp,  errors:null })),
  on(employeeListActions.employeeListCreateFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region EmployeeList Update Case
  on(employeeListActions.employeeListUpdateRequestAction, state => ({ ...state })),
  on(employeeListActions.employeeListUpdateSuccessAction, (state,resp) => ({ ...state, success:resp, errors:null })),
  on(employeeListActions.employeeListUpdateFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region EmployeeList Filter Case
  on(employeeListActions.employeeListFilterRequestAction, state => ({ ...state })),
  on(employeeListActions.employeeListFilterSuccessAction, (state,resp) => ({ ...state,  employeeListsList:resp, errors:null })),
  on(employeeListActions.employeeListFilterFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  // //#region EmployeeList Sorting Case
  // on(employeeListActions.employeeListSortingRequestAction, state => ({ ...state })),
  // on(employeeListActions.employeeListSortingSuccessAction, (state,resp) => ({ ...state, sorting:resp.sorting, errors:null })),
  // on(employeeListActions.employeeListSortingFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  // //#endregion
);

export function employeeListReducer(state: EmployeeListState | undefined, action: Action) {
  return employeeListReducersCases(state, action);
}