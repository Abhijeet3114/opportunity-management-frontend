import { Component, OnInit } from '@angular/core';
import { Audit } from '../Audit';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-audit-opportunity',
  templateUrl: './audit-opportunity.component.html',
  styleUrls: ['./audit-opportunity.component.css']
})
export class AuditOpportunityComponent implements OnInit {

  audits: Audit[] = [];

  constructor(private opportunityService: OpportunityService) { }

  ngOnInit(): void {
    this.getAudits();
  }

  getAudits() {
    this.opportunityService.getAudit().subscribe(data1 => {
      console.log(data1);
      this.audits = data1;
    }
    );
  }
}
