import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditOpportunityComponent } from './audit-opportunity/audit-opportunity.component';
import { CreateOpportunityComponent } from './create-opportunity/create-opportunity.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { OpportunityTrendsComponent } from './opportunity-trends/opportunity-trends.component';
import { SearchOpportunityComponent } from './search-opportunity/search-opportunity.component';
import { AuthGuard } from './Shared/Guard';
import { UpdateOpportunityComponent } from './update-opportunity/update-opportunity.component';
import { ViewAllOpportunitiesComponent } from './view-all-opportunities/view-all-opportunities.component';
import { ViewOpportunityComponent } from './view-opportunity/view-opportunity.component';

const routes: Routes = [
  { path: "opportunities", component: OpportunityListComponent, canActivate: [AuthGuard] },
  { path: "audit", component: AuditOpportunityComponent, canActivate: [AuthGuard] },
  { path: "add-opportunities", component: CreateOpportunityComponent, canActivate: [AuthGuard]},
  { path: "", redirectTo: "search", pathMatch: 'full' },
  { path: "update/:opportunityid", component: UpdateOpportunityComponent, canActivate: [AuthGuard] },
  { path: "search", component: SearchOpportunityComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginHomeComponent },
  { path: "summary", component: OpportunityTrendsComponent, canActivate: [AuthGuard] },
  { path: "allopportunities", component: ViewAllOpportunitiesComponent, canActivate:[AuthGuard] },
  { path: "view/:opportunityid", component: ViewOpportunityComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "oppotunities", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
