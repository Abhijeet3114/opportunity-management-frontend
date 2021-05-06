import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialLoginModule } from 'angularx-social-login';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { Opportunity } from '../opportunity';
import { OpportunityService } from '../opportunity.service';

import { OpportunityListComponent } from './opportunity-list.component';

describe('OpportunityListComponent', () => {
  let component: OpportunityListComponent;
  let fixture: ComponentFixture<OpportunityListComponent>;
  let router: Router;
  let service: OpportunityService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule, RouterTestingModule, SocialLoginModule],
      declarations: [OpportunityListComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityListComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    service = TestBed.get(OpportunityService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should able to call getOpportunities', () => {
    spyOn(service, 'getOpportunities').and.returnValue(of());
    //spyOn(component, 'goToOpportunitiesList');
    component.getOpportunities();
    expect(service.getOpportunities).toHaveBeenCalled();
  })

  it('should able to call updateOpportunities', () => {
    
    console.log = jasmine.createSpy("log")
    component.updateOpportunity(1);
    expect(console.log).toHaveBeenCalled();
    
  })

  it('should able to call deleteOpportunities', () => {
    console.log = jasmine.createSpy("log")
    component.deleteOpportunity(1);
    expect(console.log).toHaveBeenCalled();
  })

  it('should able to call viewOpportunities', () => {
    console.log = jasmine.createSpy("log")
    component.viewOpportunity(1);
    expect(console.log).toHaveBeenCalled();
  })
});
