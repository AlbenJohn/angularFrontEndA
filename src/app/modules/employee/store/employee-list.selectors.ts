import { createSelector } from '@ngrx/store';
import { EmployeeListState } from './employee-list.state';

const employeeListState = (state: any) => {
  return state.employeeList;
};

// selector for all employeelists
export const selectEmployeeListsList = createSelector(
  employeeListState,
  (state: EmployeeListState) => (state && state.employeeListsList ? state.employeeListsList : null)
);

export const selectEmployeeListSucess = createSelector(
  employeeListState,
  (state: EmployeeListState) => (state && state.employeeListsList ? state.employeeListsList : null)
);
export const selectEmployeeListError = createSelector(
  employeeListState,
  (state: EmployeeListState) => (state && state.employeeListsList ? state.errors : null)
);





// selector for details of employeelist
export const selectEmployeeListDetails = createSelector(
  employeeListState,
  (state: EmployeeListState) => (state && state.employeeListDetails ? state.employeeListDetails : null)
);


export const selectEmployeeListDetailsSuccess = createSelector(
  employeeListState,
  (state: EmployeeListState) => (state && state.employeeListDetails ? state.employeeListDetails : null)
);

export const selectEmployeeListDetailsError = createSelector(
  employeeListState,
  (state: EmployeeListState) => (state && state.employeeListsList ? state.errors : null)
);


// selector erros of employeelist state
export const selectEmployeeListErrors = createSelector(
  employeeListState,
  (state: EmployeeListState) => (state && state.errors ? state.errors : null)
);
// selector success of employeelist state
export const selectEmployeeListSucees = createSelector(
  employeeListState,
  (state: EmployeeListState) => (state && state.success ? state.success : null)
);


export const selectFilterchanges = createSelector(
  employeeListState,
  (state: EmployeeListState) => (state && state.filters ? state.filters : null)
);
