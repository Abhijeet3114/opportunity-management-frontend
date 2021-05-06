import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateOpportunityComponent } from './create-opportunity.component';
import { AppRoutingModule } from '../app-routing.module';
import { of } from 'rxjs';
import { OpportunityService } from '../opportunity.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { SocialLoginModule } from 'angularx-social-login';

describe('CreateOpportunityComponent', () => {
  let component: CreateOpportunityComponent;
  let fixture: ComponentFixture<CreateOpportunityComponent>;
  let httpClient: HttpClient;
  let service: OpportunityService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule, RouterTestingModule, SocialLoginModule],
      declarations: [CreateOpportunityComponent]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpportunityComponent);
    httpClient = TestBed.get(HttpClient);
    service = TestBed.inject(OpportunityService);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Able To Call saveOpportunity function', () => {
    //spyOnAllFunctions(component);
    spyOn(service, 'createOpportunity').and.returnValue(of(Object));
    spyOn(component, 'goToOpportunitiesList');
    component.saveOppotunity();
    expect(service.createOpportunity).toHaveBeenCalled();
    expect(component.goToOpportunitiesList).toHaveBeenCalled();
  });

  it('Should Able To Call gotoOpportunityList function', () => {
    //spyOnAllFunctions(component);
    component.goToOpportunitiesList();
    //expect(location.path()).toBe('/search')
    //expect(component.saveOppotunity()).toHaveBeenCalled();
  });

  it('Should Able To Call onSubmit function', () => {
    //spyOnAllFunctions(component);
    component.onSubmit();
    ///expect(component.saveOppotunity()).toBeTruthy();
    //expect(component.saveOppotunity()).toHaveBeenCalled();
  });

  it('Should Able To Call ngOnInit function', () => {
    component.ngOnInit();
    //expect(component.saveOppotunity()).toBeTruthy();
  });
  it('Should Able To Call opportunity function', () => {
    //spyOnAllFunctions(component);
    component.opportunity;
    //expect(component.saveOppotunity()).toHaveBeenCalled();
  });

});
