import { Action, createAction, props } from '@ngrx/store';

//#region company List Section
export const companyListRequestAction = createAction('[COMPANY] Request company List',props<{ payload:any; }>());
export const companyListSuccessAction = createAction('[COMPANY] Success get company List',props<{ response: any;}>());
export const companyListFailedAction  = createAction('[COMPANY] Failed to get company List',props<{ error: any;}>());
//#endregion

//#region company Details Section
export const companyDetailsRequestAction = createAction('[COMPANY] Request company Details',props<{ payload:any; }>());
export const companyDetailsSuccessAction = createAction('[COMPANY] Success get company Details',props<{ response: any;}>());
export const companyDetailsFailedAction  = createAction('[COMPANY] Failed to get companys List',props<{ error: any;}>());
//#endregion

//#region company Delete Section
export const companyDeleteRequestAction = createAction('[COMPANY] Request company to Delete',props<{ payload:any; }>());
export const companyDeleteSuccessAction = createAction('[COMPANY] Success get company to Delete',props<{ response: any;}>());
export const companyDeleteFailedAction  = createAction('[COMPANY] Failed to get company to Delete',props<{ error: any;}>());
//#endregion

//#region company Create Section
export const companyCreateRequestAction = createAction('[COMPANY] Request company to Save',props<{ payload:any; }>());
export const companyCreateSuccessAction = createAction('[COMPANY] Success get company to Save',props<{ response: any;}>());
export const companyCreateFailedAction  = createAction('[COMPANY] Failed to get company to Save',props<{ error: any;}>());
//#endregion

//#region company Update Section
export const companyUpdateRequestAction = createAction('[COMPANY] Request company to Update',props<{ payload:any; }>());
export const companyUpdateSuccessAction = createAction('[COMPANY] Success get company to Update',props<{ response: any;}>());
export const companyUpdateFailedAction  = createAction('[COMPANY] Failed to get company to Update',props<{ error: any;}>());
//#endregion

//#region company Filter List Section
export const companyFilterRequestAction = createAction('[COMPANY] Request company to Filter List',props<{ payload:any; }>());
export const companyFilterSuccessAction = createAction('[COMPANY] Success get company to Filter List',props<{ filter: any;}>());
export const companyFilterFailedAction  = createAction('[COMPANY] Failed to get company to Filter List',props<{ error: any;}>());
//#endregion

//#region company Sorting List Section
export const companySortingRequestAction = createAction('[COMPANY] Request company to Sort List',props<{ payload:any; }>());
export const companySortingSuccessAction = createAction('[COMPANY] Success get company to Sort List',props<{ sorting: any;}>());
export const companySortingFailedAction  = createAction('[COMPANY] Failed to get company to Sort List',props<{ error: any;}>());
//#endregion
