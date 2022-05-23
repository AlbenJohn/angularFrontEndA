import { initialEmployeeState, EmployeeState } from './employee.state';
import * as employeeActions from './employee.actions';
import { Action,createReducer, on } from '@ngrx/store';

const employeeReducersCases =  createReducer(
  initialEmployeeState,

  //#region Employee List Case
  on(employeeActions.employeeListRequestAction, state => ({ ...state })),
  on(employeeActions.employeeListSuccessAction, (state,resp) => ({ ...state, employeeList:resp.response, errors:null })),
  on(employeeActions.employeeListFailedAction, (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region Employee Details Case
  on(employeeActions.employeeDetailsRequestAction, state => ({ ...state })),
  on(employeeActions.employeeDetailsSuccessAction, (state,resp) => ({ ...state, employeeDetails:resp.response, errors:null })),
  on(employeeActions.employeeDetailsFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region Employee Delete Case
  on(employeeActions.employeeDeleteRequestAction, state => ({ ...state })),
  on(employeeActions.employeeDeleteSuccessAction, (state,resp) => ({ ...state, errors:null })),
  on(employeeActions.employeeDeleteFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region Employee Create Case
  on(employeeActions.employeeCreateRequestAction, state => ({ ...state })),
  on(employeeActions.employeeCreateSuccessAction, (state,resp) => ({ ...state, errors:null })),
  on(employeeActions.employeeCreateFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region Employee Update Case
  on(employeeActions.employeeUpdateRequestAction, state => ({ ...state })),
  on(employeeActions.employeeUpdateSuccessAction, (state,resp) => ({ ...state, errors:null })),
  on(employeeActions.employeeUpdateFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region Employee Filter Case
  on(employeeActions.employeeFilterRequestAction, state => ({ ...state })),
  on(employeeActions.employeeFilterSuccessAction, (state,resp) => ({ ...state, filters:resp.filter, errors:null })),
  on(employeeActions.employeeFilterFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion

  //#region Employee Sorting Case
  on(employeeActions.employeeSortingRequestAction, state => ({ ...state })),
  on(employeeActions.employeeSortingSuccessAction, (state,resp) => ({ ...state, sorting:resp.sorting, errors:null })),
  on(employeeActions.employeeSortingFailedAction , (state,resp) => ({ ...state,errors:resp.error })),
  //#endregion
);

export function employeeReducer(state: EmployeeState | undefined, action: Action) {
  return employeeReducersCases(state, action);
}