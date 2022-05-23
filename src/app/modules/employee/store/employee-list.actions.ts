import { Action, createAction, props } from '@ngrx/store';

//#region employee_list List Section
export const employeeListListRequestAction = createAction('[EMPLOYEE_LIST] Request employee_list List',props<{ payload:any; }>());
export const employeeListListSuccessAction = createAction('[EMPLOYEE_LIST] Success get employee_list List',props<{ response: any;}>());
export const employeeListListFailedAction  = createAction('[EMPLOYEE_LIST] Failed to get employee_list List',props<{ error: any;}>());
//#endregion


//#region employee_list List Section with pagination
export const employeeListPaginaitonRequestAction = createAction('[EMPLOYEE_LIST] Request employee_list List Pagination',props<{ payload:any; }>());
export const mployeeListPaginaitonSuccessAction = createAction('[EMPLOYEE_LIST] Success get employee_list List Pagination',props<{ response: any;}>());
export const mployeeListPaginaitonFailedAction  = createAction('[EMPLOYEE_LIST] Failed to get employee_list List Pagination',props<{ error: any;}>());
//#endregion


//#region employee_list Details Section
export const employeeListDetailsRequestAction = createAction('[EMPLOYEE_LIST] Request employee_list Details',props<{ payload:any; }>());
export const employeeListDetailsSuccessAction = createAction('[EMPLOYEE_LIST] Success get employee_list Details',props<{ response: any;}>());
export const employeeListDetailsFailedAction  = createAction('[EMPLOYEE_LIST] Failed to get employee_lists List',props<{ error: any;}>());
//#endregion

//#region employee_list Delete Section
export const employeeListDeleteRequestAction = createAction('[EMPLOYEE_LIST] Request employee_list to Delete',props<{ payload:any; }>());
export const employeeListDeleteSuccessAction = createAction('[EMPLOYEE_LIST] Success get employee_list to Delete',props<{ response: any;}>());
export const employeeListDeleteFailedAction  = createAction('[EMPLOYEE_LIST] Failed to get employee_list to Delete',props<{ error: any;}>());
//#endregion

//#region employee_list Create Section
export const employeeListCreateRequestAction = createAction('[EMPLOYEE_LIST] Request employee_list to Save',props<{ payload:any; }>());
export const employeeListCreateSuccessAction = createAction('[EMPLOYEE_LIST] Success get employee_list to Save',props<{ response: any;}>());
export const employeeListCreateFailedAction  = createAction('[EMPLOYEE_LIST] Failed to get employee_list to Save',props<{ error: any;}>());
//#endregion

//#region employee_list Update Section
export const employeeListUpdateRequestAction = createAction('[EMPLOYEE_LIST] Request employee_list to Update',props<{ payload:any; }>());
export const employeeListUpdateSuccessAction = createAction('[EMPLOYEE_LIST] Success get employee_list to Update',props<{ response: any;}>());
export const employeeListUpdateFailedAction  = createAction('[EMPLOYEE_LIST] Failed to get employee_list to Update',props<{ error: any;}>());
//#endregion

//#region employee_list Filter List Section
export const employeeListFilterRequestAction = createAction('[EMPLOYEE_LIST] Request employee_list to Filter List',props<{ payload:any; }>());
export const employeeListFilterSuccessAction = createAction('[EMPLOYEE_LIST] Success get employee_list to Filter List',props<{ filter: any;}>());
export const employeeListFilterFailedAction  = createAction('[EMPLOYEE_LIST] Failed to get employee_list to Filter List',props<{ error: any;}>());
//#endregion

// //#region employee_list Sorting List Section
// export const employeeListSortingRequestAction = createAction('[EMPLOYEE_LIST] Request employee_list to Sort List',props<{ payload:any; }>());
// export const employeeListSortingSuccessAction = createAction('[EMPLOYEE_LIST] Success get employee_list to Sort List',props<{ sorting: any;}>());
// export const employeeListSortingFailedAction  = createAction('[EMPLOYEE_LIST] Failed to get employee_list to Sort List',props<{ error: any;}>());
// //#endregion
