export class Audit {
  auditId: number = 0;
  OpportunityID: number = 0;
  action: string = '';
  modifiedBy: string = '';
  role: string = '';
  location: string = '';
  createdOn: Date = new Date();
  modifiedOn: Date = new Date();
}
