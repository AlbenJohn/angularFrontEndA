import { Action, createAction, props } from '@ngrx/store';

//#region employee List Section
export const employeeListRequestAction = createAction('[EMPLOYEE] Request employee List',props<{ payload:any; }>());
export const employeeListSuccessAction = createAction('[EMPLOYEE] Success get employee List',props<{ response: any;}>());
export const employeeListFailedAction  = createAction('[EMPLOYEE] Failed to get employee List',props<{ error: any;}>());
//#endregion

//#region employee Details Section
export const employeeDetailsRequestAction = createAction('[EMPLOYEE] Request employee Details',props<{ payload:any; }>());
export const employeeDetailsSuccessAction = createAction('[EMPLOYEE] Success get employee Details',props<{ response: any;}>());
export const employeeDetailsFailedAction  = createAction('[EMPLOYEE] Failed to get employees List',props<{ error: any;}>());
//#endregion

//#region employee Delete Section
export const employeeDeleteRequestAction = createAction('[EMPLOYEE] Request employee to Delete',props<{ payload:any; }>());
export const employeeDeleteSuccessAction = createAction('[EMPLOYEE] Success get employee to Delete',props<{ response: any;}>());
export const employeeDeleteFailedAction  = createAction('[EMPLOYEE] Failed to get employee to Delete',props<{ error: any;}>());
//#endregion

//#region employee Create Section
export const employeeCreateRequestAction = createAction('[EMPLOYEE] Request employee to Save',props<{ payload:any; }>());
export const employeeCreateSuccessAction = createAction('[EMPLOYEE] Success get employee to Save',props<{ response: any;}>());
export const employeeCreateFailedAction  = createAction('[EMPLOYEE] Failed to get employee to Save',props<{ error: any;}>());
//#endregion

//#region employee Update Section
export const employeeUpdateRequestAction = createAction('[EMPLOYEE] Request employee to Update',props<{ payload:any; }>());
export const employeeUpdateSuccessAction = createAction('[EMPLOYEE] Success get employee to Update',props<{ response: any;}>());
export const employeeUpdateFailedAction  = createAction('[EMPLOYEE] Failed to get employee to Update',props<{ error: any;}>());
//#endregion

//#region employee Filter List Section
export const employeeFilterRequestAction = createAction('[EMPLOYEE] Request employee to Filter List',props<{ payload:any; }>());
export const employeeFilterSuccessAction = createAction('[EMPLOYEE] Success get employee to Filter List',props<{ filter: any;}>());
export const employeeFilterFailedAction  = createAction('[EMPLOYEE] Failed to get employee to Filter List',props<{ error: any;}>());
//#endregion

//#region employee Sorting List Section
export const employeeSortingRequestAction = createAction('[EMPLOYEE] Request employee to Sort List',props<{ payload:any; }>());
export const employeeSortingSuccessAction = createAction('[EMPLOYEE] Success get employee to Sort List',props<{ sorting: any;}>());
export const employeeSortingFailedAction  = createAction('[EMPLOYEE] Failed to get employee to Sort List',props<{ error: any;}>());
//#endregion
