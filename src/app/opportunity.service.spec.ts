import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OpportunityService } from './opportunity.service';
import { of } from 'rxjs';
import { Opportunity } from './opportunity';

describe('OpportunityService', () => {
  let service: OpportunityService;
  let httpClient: HttpClient;
  let newOppo: Opportunity;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(OpportunityService);
    httpClient = TestBed.get(HttpClient);
    newOppo = { "opportunityId": 10, "skills": "Angular, React, Java, Spring Framework, MySQL", "publishDate": new Date("2021-04-21"), "joiningDate": new Date("2021-04-21"), "description": "", "role": "Full Stack Developer", "joiningLocation": "Delhi", "experience": 4, "hiringManager": "Balpreet Singh" };
  });

  it('should able to create Opporunity service', () => {
    expect(service).toBeTruthy();
  });

  it('Should Able To Call getOpportunities API', () => {
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getOpportunities();
    expect(service.getOpportunities()).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('Should Able To Call getAllOpportunities API', () => {
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getAllOpportunities();
    expect(service.getAllOpportunities()).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('Should Able To Call createOpportunity API', () => {
    spyOn(httpClient, 'post').and.returnValue(of(Object));
    service.createOpportunity(newOppo);
    expect(service.createOpportunity(newOppo)).toBeTruthy();
    expect(httpClient.post).toHaveBeenCalled();
  });

  it('Should Able To Call getOpportunityByID API', () => {
    spyOn(httpClient, 'get').and.returnValue(of(Opportunity));
    service.getOpportunityById(10);
    expect(service.getOpportunityById(10)).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('Should Able To Call deleteOpportunity API', () => {
    spyOn(httpClient, 'delete').and.returnValue(of(Opportunity));
    service.deleteOpportunity(10);
    expect(service.deleteOpportunity(10)).toBeTruthy();
    expect(httpClient.delete).toHaveBeenCalled();
  });

  it('Should Able To Call searchOpportunities API', () => {
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.searchOpportunityByRole("Mumbai");
    expect(service.searchOpportunityByRole("Mumbai")).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('Should Able To Call updateOpportunity API', () => {
    spyOn(httpClient, 'put').and.returnValue(of(Object));
    service.updateOpportunity(10, newOppo);
    expect(service.updateOpportunity(10, newOppo)).toBeTruthy();
    expect(httpClient.put).toHaveBeenCalled();
  });

});
