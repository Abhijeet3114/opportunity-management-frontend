import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOpportunityComponent } from './create-opportunity/create-opportunity.component';
import { OpportunityListComponent } from './opportunity-list/opportunity-list.component';
import { SearchOpportunityComponent } from './search-opportunity/search-opportunity.component';
import { UpdateOpportunityComponent } from './update-opportunity/update-opportunity.component';
import { ViewOpportunityComponent } from './view-opportunity/view-opportunity.component';

const routes: Routes = [
  { path: "opportunities", component: OpportunityListComponent },
  { path: "add-opportunities", component: CreateOpportunityComponent },
  { path: "", redirectTo: "opportunities", pathMatch: 'full' },
  { path: "update/:opportunityid", component: UpdateOpportunityComponent },
  { path: "search", component: SearchOpportunityComponent },
  { path: "view/:opportunityid", component: ViewOpportunityComponent },
  { path: "**", redirectTo: "opportunities", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
