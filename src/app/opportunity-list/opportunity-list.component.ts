import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.css']
})
export class OpportunityListComponent implements OnInit {
  opportunities: Opportunity[] = [];
  constructor(private opportunityService: OpportunityService, private router: Router) { }

  ngOnInit(): void {
    this.getOpportunities();
  }

  getOpportunities() {
    this.opportunityService.getOpportunities().subscribe(data1 => {
      console.log(data1);
      this.opportunities = data1;
      console.log("Opportunities object");
      console.log(this.opportunities[0]);
    }
    );
  }

  updateOpportunity(opportunityid: number) {
    console.log(opportunityid);
    this.router.navigate(['update', opportunityid]);
  }

  deleteOpportunity(opportunityid: number) {
    this.opportunityService.deleteOpportunity(opportunityid).subscribe(data => {
      this.getOpportunities();
      });
  }
  viewOpportunity(opportunityid: number) {
    console.log(opportunityid);
    this.router.navigate(['view', opportunityid]);
  }
}
