import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { OpportunityService } from '../opportunity.service';

import { OpportunityTrendsComponent } from './opportunity-trends.component';

describe('OpportunityTrendsComponent', () => {
  let component: OpportunityTrendsComponent;
  let fixture: ComponentFixture<OpportunityTrendsComponent>;
  let service: OpportunityService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule, RouterTestingModule],
      declarations: [ OpportunityTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityTrendsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(OpportunityService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngInit', () => {
    //spyOn(component, 'multidata_OpportunitiesLocationRoleValue');
    spyOn(service, 'getAllOpportunities').and.returnValue(of());
    component.ngOnInit();
    expect(component.summarrydata).toBeTruthy();
    expect(component.locationData).toBeTruthy();
    expect(component.opportunities).toBeTruthy();
    expect(service.getAllOpportunities).toHaveBeenCalled();
   // expect(component.locationVacancy).toHaveBeenCalled();
  });

  it('should call LocationVacancy', () => {
    console.log = jasmine.createSpy("log");
    component.locationVacancy();
    expect(console.log).toHaveBeenCalled();
  });

  it('should call multidata_OpportunitiesLocationRoleValue', () => {
    console.log = jasmine.createSpy("log");
    component.multidata_OpportunitiesLocationRoleValue();
    expect(console.log).toHaveBeenCalled();
  });

  it('should call yearWiseTrends', () => {
    console.log = jasmine.createSpy("log");
    spyOn(component, 'ngOnInit')
    component.yearwisetrend();
    expect(console.log).toHaveBeenCalled();
    expect(component.ngOnInit).toHaveBeenCalled();
    
  });
});


