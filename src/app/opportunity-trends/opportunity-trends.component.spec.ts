import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityTrendsComponent } from './opportunity-trends.component';

describe('OpportunityTrendsComponent', () => {
  let component: OpportunityTrendsComponent;
  let fixture: ComponentFixture<OpportunityTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
