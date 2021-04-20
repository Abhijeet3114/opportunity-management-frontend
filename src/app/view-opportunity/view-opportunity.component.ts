import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-view-opportunity',
  templateUrl: './view-opportunity.component.html',
  styleUrls: ['./view-opportunity.component.css']
})
export class ViewOpportunityComponent implements OnInit {
  id: number = 0;
  opportunity: Opportunity = new Opportunity();
  constructor(private route: ActivatedRoute, private opportunityService: OpportunityService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['opportunityid'];
    this.opportunityService.getOpportunityById(this.id).subscribe(
      data => {
        this.opportunity = data;
      });
  }

}
