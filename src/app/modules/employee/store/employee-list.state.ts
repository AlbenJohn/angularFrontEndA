
export interface EmployeeListState {
  errors: any | null;
  employeeListsList:any;
  employeeListDetails:any;
  filters:any | null;
  sorting:any | null;
  success: any | null;
}

export const initialEmployeeListState: EmployeeListState = {
  errors: null,
  success: null,
  employeeListsList:[],
  employeeListDetails:null,
  filters:null,
  sorting:null
};
