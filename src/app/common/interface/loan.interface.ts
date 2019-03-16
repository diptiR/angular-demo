export interface Loan {
  loanId: string;
  borrowerFirstName: string;
  borrowerMiddleName: string;
  borrowerLastName: string;
  type: string;
  emiAmt: number;
  rateOfInterest: number;
  loanAmt: number;
  balanceAmt: number;
}
