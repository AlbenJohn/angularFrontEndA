import { createSelector } from '@ngrx/store';
import { EmployeeState } from './employee.state';

const employeeState = (state: any) => {
  return state.employee;
};

// selector for all employees
export const selectEmployeesList = createSelector(
  employeeState,
  (state: EmployeeState) => (state && state.employeesList ? state.employeesList : null)
);


// selector for details of employee
export const selectEmployeeDetails = createSelector(
  employeeState,
  (state: EmployeeState) => (state && state.employeeDetails ? state.employeeDetails : null)
);


// selector erros of employee state
export const selectEmployeeErrors = createSelector(
  employeeState,
  (state: EmployeeState) => (state && state.errors ? state.errors : null)
);
