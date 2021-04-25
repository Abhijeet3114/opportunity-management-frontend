import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-update-opportunity',
  templateUrl: './update-opportunity.component.html',
  styleUrls: ['./update-opportunity.component.css']
})
export class UpdateOpportunityComponent implements OnInit {
  id: number = 0;
  opportunity: Opportunity = new Opportunity();
  constructor(private opportunityService: OpportunityService, private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['opportunityid'];
    this.opportunityService.getOpportunityById(this.id).subscribe(data => {
      this.opportunity = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.opportunityService.updateOpportunity(this.id, this.opportunity).subscribe(data => {
      console.log(data);
      this.goToOpportunitiesList();
    }, error => console.log(error)
    );
  }

  keyPressAlphaNumeric(event: any) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  goToOpportunitiesList() {
    this.route.navigate(['/opportunities']);
  }
}
