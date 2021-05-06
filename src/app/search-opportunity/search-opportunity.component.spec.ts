import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from '../app-routing.module';

import { SearchOpportunityComponent } from './search-opportunity.component';

describe('SearchOpportunityComponent', () => {
  let component: SearchOpportunityComponent;
  let fixture: ComponentFixture<SearchOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule, RouterTestingModule],
      declarations: [SearchOpportunityComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
