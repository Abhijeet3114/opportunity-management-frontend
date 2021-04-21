import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-view-all-opportunities',
  templateUrl: './view-all-opportunities.component.html',
  styleUrls: ['./view-all-opportunities.component.css']
})
export class ViewAllOpportunitiesComponent implements OnInit {
  opportunities: Opportunity[] = [];
  constructor(private opportunityService: OpportunityService, private router: Router) { }

  ngOnInit(): void {
    this.getAllOpportunities();
  }
  getAllOpportunities() {
    this.opportunityService.getAllOpportunities().subscribe(data1 => {
      console.log(data1);
      this.opportunities = data1;
    }
    );
  }

  updateOpportunity(opportunityid: number) {
    console.log(opportunityid);
    this.router.navigate(['update', opportunityid]);
  }

  deleteOpportunity(opportunityid: number) {
    this.opportunityService.deleteOpportunity(opportunityid).subscribe(data => {
      this.getAllOpportunities();
    });
  }
  viewOpportunity(opportunityid: number) {
    console.log(opportunityid);
    this.router.navigate(['view', opportunityid]);
  }

}
