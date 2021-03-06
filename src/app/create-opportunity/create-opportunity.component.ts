import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-create-opportunity',
  templateUrl: './create-opportunity.component.html',
  styleUrls: ['./create-opportunity.component.css']
})
export class CreateOpportunityComponent implements OnInit {

  opportunity: Opportunity = new Opportunity();
  date: Date = new Date();
  constructor(private opportunityService: OpportunityService, private router: Router) {
  }
 
  ngOnInit(): void {
    this.date = new Date();
    //this.date.setMonth(this.date.getMonth() + 1);
  }

  saveOppotunity() {
    this.opportunityService.createOpportunity(this.opportunity).subscribe(data => {
      console.log(this.opportunity);
      this.goToOpportunitiesList();
    },
      error => console.log(error));
  }

  keyPressAlphaNumeric(event : any) {
    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  goToOpportunitiesList() {
    this.router.navigate(['/opportunities']);
  }
  onSubmit() {
    console.log(this.opportunity);
    this.saveOppotunity();
  }
}
