import { createSelector } from '@ngrx/store';
import { CompanyState } from './company.state';

const companyState = (state: any) => {
  return state.company;
};

// selector for all companys
export const selectCompanysList = createSelector(
  companyState,
  (state: CompanyState) => (state && state.companysList ? state.companysList : null)
);


// selector for details of company
export const selectCompanyDetails = createSelector(
  companyState,
  (state: CompanyState) => (state && state.companyDetails ? state.companyDetails : null)
);


// selector erros of company state
export const selectCompanyErrors = createSelector(
  companyState,
  (state: CompanyState) => (state && state.errors ? state.errors : null)
);
