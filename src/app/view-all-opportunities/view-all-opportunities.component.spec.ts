import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllOpportunitiesComponent } from './view-all-opportunities.component';

describe('ViewAllOpportunitiesComponent', () => {
  let component: ViewAllOpportunitiesComponent;
  let fixture: ComponentFixture<ViewAllOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllOpportunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
