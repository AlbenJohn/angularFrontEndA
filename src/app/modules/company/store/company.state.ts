
export interface CompanyState {
  errors: any | null;
  companysList:any;
  companyDetails:any;
  filters:any | null;
  sorting:any | null;
}

export const initialCompanyState: CompanyState = {
  errors: null,
  companysList:[],
  companyDetails:null,
  filters:null,
  sorting:null
};
