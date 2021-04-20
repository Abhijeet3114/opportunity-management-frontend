import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-search-opportunity',
  templateUrl: './search-opportunity.component.html',
  styleUrls: ['./search-opportunity.component.css']
})
export class SearchOpportunityComponent implements OnInit {
  opportunities: Opportunity[] = [];
  searchString: string ='';
  constructor(private opportunityService: OpportunityService, private router: Router) { }

  ngOnInit(): void {
    this.searchById(this.searchString);
  }

  updateOpportunity(opportunityid: number) {
    console.log(opportunityid);
    this.router.navigate(['update', opportunityid]);
  }

  deleteOpportunity(opportunityid: number) {
    this.opportunityService.deleteOpportunity(opportunityid).subscribe(data => {
      this.searchById(this.searchString);
    });
  }

  searchById(role: string) {
    this.searchString =role;
    this.opportunityService.searchOpportunityByRole(role).subscribe(data => {
      this.opportunities = data;
      console.log(data);
    });
  }

  viewOpportunity(opportunityid: number) {
    console.log(opportunityid);
    this.router.navigate(['view', opportunityid]);
  }
}
