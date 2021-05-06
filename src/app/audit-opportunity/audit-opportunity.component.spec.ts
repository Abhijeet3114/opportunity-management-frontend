import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { OpportunityService } from '../opportunity.service';

import { AuditOpportunityComponent } from './audit-opportunity.component';

describe('AuditOpportunityComponent', () => {
  let component: AuditOpportunityComponent;
  let fixture: ComponentFixture<AuditOpportunityComponent>;
  let service: OpportunityService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule, RouterTestingModule],
      declarations: [ AuditOpportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditOpportunityComponent);
    component = fixture.componentInstance;
    service = TestBed.get(OpportunityService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAudit', () => {
    spyOn(service, 'getAudit').and.returnValue(of());
    console.log = jasmine.createSpy("log");
    component.getAudits();
    expect(service.getAudit).toHaveBeenCalled();
  });
});
