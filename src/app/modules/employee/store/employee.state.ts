
export interface EmployeeState {
  errors: any | null;
  employeesList:any;
  employeeDetails:any;
  filters:any | null;
  sorting:any | null;
}

export const initialEmployeeState: EmployeeState = {
  errors: null,
  employeesList:[],
  employeeDetails:null,
  filters:null,
  sorting:null
};
