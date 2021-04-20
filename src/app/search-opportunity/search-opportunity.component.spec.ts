import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOpportunityComponent } from './search-opportunity.component';

describe('SearchOpportunityComponent', () => {
  let component: SearchOpportunityComponent;
  let fixture: ComponentFixture<SearchOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOpportunityComponent ]
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
});
