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
    }
    );
  }

  updateOpportunity(opportunityid: number) {
    console.log(opportunityid);
    this.router.navigate(['update', opportunityid]);
  }

  deleteOpportunity(opportunityid: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.opportunityService.deleteOpportunity(opportunityid).subscribe(data => {
        this.getOpportunities();
      });
      console.log('Deleted from the database.');
    } else {
      // Do nothing!
      console.log('Not deleted from the database.');
    }
    
  }
  viewOpportunity(opportunityid: number) {
    console.log(opportunityid);
    this.router.navigate(['view', opportunityid]);
  }
}
