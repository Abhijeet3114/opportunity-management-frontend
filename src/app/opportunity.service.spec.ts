import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OpportunityService } from './opportunity.service';
import { of } from 'rxjs';
import { Opportunity } from './opportunity';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('OpportunityService', () => {
  let service: OpportunityService;
  let httpClient: HttpClient;
  let newOppo: Opportunity;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(OpportunityService);
    httpClient = TestBed.get(HttpClient);
    newOppo = { "opportunityId": 10, "skills": "Angular, React, Java, Spring Framework, MySQL", "publishDate": new Date("2021-04-21"), "joiningDate": new Date("2021-04-21"), "description": "", "role": "Full Stack Developer", "joiningLocation": "Delhi", "experience": 4, "hiringManager": "Abhijeet Chavan" };
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

  it("getOpportunities API call(with correct parameters) Should be able to return List of Opportunities", () => {
    //create a mock return response
    const Opportunities_response = [
      {
        "opportunityId": 10,
        "skills": "Angular, React, Java, Spring Framework, MySQL",
        "publishDate": new Date("2021-04-21"),
        "joiningDate": new Date("2021-04-21"),
        "description": "",
        "role": "Full Stack Developer",
        "joiningLocation": "Delhi",
        "experience": 4,
        "hiringManager": "Balpreet Singh",
      },
      {
        "opportunityId": 10,
        "skills": "Angular, React, Java, Spring Framework, MySQL",
        "publishDate": new Date("2021-04-27"),
        "joiningDate": new Date("2021-04-21"),
        "description": "",
        "role": "Full Stack Developer",
        "joiningLocation": "Delhi",
        "experience": 4,
        "hiringManager": "Abhijeet Chavan",
      }
    ];

    let response;
    spyOn(service, "getOpportunities").and.returnValue(of(Opportunities_response));
    service.getOpportunities().subscribe(res => {
      response = res;
    });
    console.log("Valid Opportunities",response);
    expect(response).toBeTruthy(Opportunities_response);
  });

  it('Should Able To Call getAllOpportunities API', () => {
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getAllOpportunities();
    expect(service.getAllOpportunities()).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getAllOpportunities API call(with correct parameters) Should be able to return List of Opportunities", () => {
    //create a mock return response
    const Opportunities_response = [
      {
        "opportunityId": 10,
        "skills": "Angular, React, Java, Spring Framework, MySQL",
        "publishDate": new Date("2021-04-21"),
        "joiningDate": new Date("2021-04-21"),
        "description": "",
        "role": "Full Stack Developer",
        "joiningLocation": "Delhi",
        "experience": 4,
        "hiringManager": "Balpreet Singh",
      },
      {
        "opportunityId": 10,
        "skills": "Angular, React, Java, Spring Framework, MySQL",
        "publishDate": new Date("2021-04-27"),
        "joiningDate": new Date("2021-04-21"),
        "description": "",
        "role": "Full Stack Developer",
        "joiningLocation": "Delhi",
        "experience": 4,
        "hiringManager": "Abhijeet Chavan",
      }
    ];

    let response;
    spyOn(service, "getAllOpportunities").and.returnValue(of(Opportunities_response));
    service.getAllOpportunities().subscribe(res => {
      response = res;
    });
    console.log("All Opportunities", response);
    expect(response).toBeTruthy(Opportunities_response);
  });


  it('Should Able To Call createOpportunity API', () => {
    spyOn(httpClient, 'post').and.returnValue(of(Object));
    service.createOpportunity(newOppo);
    expect(service.createOpportunity(newOppo)).toBeTruthy();
    expect(httpClient.post).toHaveBeenCalled();
  });

  it("createOpportunity API call Should be able to create oppo to list of opportunities with correct parameters", () => {
    //create a mock return response
    const Opportunities_response =
      {
        "opportunityId": 1,
        "skills": "Angular, React, Java, Spring Framework, MySQL",
        "publishDate": new Date("2021-04-21"),
        "joiningDate": new Date("2021-04-21"),
        "description": "",
        "role": "Full Stack Developer",
        "joiningLocation": "Delhi",
        "experience": 4,
        "hiringManager": "Balpreet Singh",
      }
    ;

    let response;
    spyOn(service, "createOpportunity").and.returnValue(of(Opportunities_response));
    service.createOpportunity(newOppo).subscribe(res => {
      response = res;
    });
    console.log("Created Opporunity", response);
    expect(response).toBeTruthy(Opportunities_response);
  });



  it('Should Able To Call getOpportunityByID API', () => {
    spyOn(httpClient, 'get').and.returnValue(of(Opportunity));
    service.getOpportunityById(10);
    expect(service.getOpportunityById(10)).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it("getOpportunityByID API call(with correct parameters) Should be able to return Opportunity with specified ID", () => {
    //create a mock return response
    const Opportunities_response =
      {
        "opportunityId": 10,
        "skills": "Angular, React, Java, Spring Framework, MySQL",
        "publishDate": new Date("2021-04-21"),
        "joiningDate": new Date("2021-04-21"),
        "description": "",
        "role": "Full Stack Developer",
        "joiningLocation": "Delhi",
        "experience": 4,
        "hiringManager": "Balpreet Singh",
      };

    let response;
    spyOn(service, "getOpportunityById").and.returnValue(of(Opportunities_response));
    service.getOpportunityById(Opportunities_response.opportunityId).subscribe(res => {
      response = res;
    });
    console.log("Valid Opportunities", response);
    expect(response).toBeTruthy(Opportunities_response);
  });

  it('Should Able To Call deleteOpportunity API', () => {
    spyOn(httpClient, 'delete').and.returnValue(of(Opportunity));
    service.deleteOpportunity(10);
    expect(service.deleteOpportunity(10)).toBeTruthy();
    expect(httpClient.delete).toHaveBeenCalled();
  });

  it("deleteOpportunity API call(with correct parameters) Should be able to delete Opportunity with specified ID", () => {
    //create a mock return response
    const Opportunities_response =
    {
      "opportunityId": 10,
      "skills": "Angular, React, Java, Spring Framework, MySQL",
      "publishDate": new Date("2021-04-21"),
      "joiningDate": new Date("2021-04-21"),
      "description": "",
      "role": "Full Stack Developer",
      "joiningLocation": "Delhi",
      "experience": 4,
      "hiringManager": "Balpreet Singh",
    };

    let response;
    spyOn(service, "deleteOpportunity").and.returnValue(of(Opportunities_response));
    service.deleteOpportunity(Opportunities_response.opportunityId).subscribe(res => {
      response = res;
    });
    console.log("Deleted Opportunities", response);
    expect(response).toBeTruthy(Opportunities_response);
  });

  it('Should Able To Call searchOpportunities API', () => {
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.searchOpportunityByRole("Mumbai");
    expect(service.searchOpportunityByRole("Mumbai")).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it("SearchOpportunity API call(with correct parameters) Should be able to return list of opportunities", () => {
    //create a mock return response
    const Opportunities_response =[
    {
      "opportunityId": 10,
      "skills": "Angular, React, Java, Spring Framework, MySQL",
      "publishDate": new Date("2021-04-21"),
      "joiningDate": new Date("2021-04-21"),
      "description": "",
      "role": "Full Stack Developer",
      "joiningLocation": "Delhi",
      "experience": 4,
      "hiringManager": "Balpreet Singh",
      },
      {
        "opportunityId": 10,
        "skills": "Angular, React, Java, Spring Framework, MySQL",
        "publishDate": new Date("2021-04-21"),
        "joiningDate": new Date("2021-04-21"),
        "description": "",
        "role": "Full Stack Developer",
        "joiningLocation": "Mumbai",
        "experience": 4,
        "hiringManager": "Balpreet Singh",
      }
    ];

    let response;
    spyOn(service, "searchOpportunityByRole").and.returnValue(of(Opportunities_response));
    service.searchOpportunityByRole("Mumbai").subscribe(res => {
      response = res;
    });
    console.log("SearchResult", response);
    expect(response).toBeTruthy(Opportunities_response);
  });

  it('Should Able To Call updateOpportunity API', () => {
    spyOn(httpClient, 'put').and.returnValue(of(Object));
    service.updateOpportunity(10, newOppo);
    expect(service.updateOpportunity(10, newOppo)).toBeTruthy();
    expect(httpClient.put).toHaveBeenCalled();
  });

  it("deleteOpportunity API call Should be able to call delete oppo from list of opportunities with correct parameters", () => {
    //create a mock return response
    const Opportunities_response = [
      {
        "opportunityId": 1,
        "skills": "Angular, React, Java, Spring Framework, MySQL",
        "publishDate": new Date("2021-04-21"),
        "joiningDate": new Date("2021-04-21"),
        "description": "",
        "role": "Full Stack Developer",
        "joiningLocation": "Delhi",
        "experience": 4,
        "hiringManager": "Balpreet Singh",
      },
      {
        "opportunityId": 10,
        "skills": "Angular, React, Java, Spring Framework, MySQL",
        "publishDate": new Date("2021-04-21"),
        "joiningDate": new Date("2021-04-21"),
        "description": "",
        "role": "Full Stack Developer",
        "joiningLocation": "Mumbai",
        "experience": 4,
        "hiringManager": "Balpreet Singh",
      }
    ];

    let response;
    spyOn(service, "updateOpportunity").and.returnValue(of(Opportunities_response));
    service.updateOpportunity(10, newOppo).subscribe(res => {
      response = res;
    });
    console.log("Update Opporunity", response);
    expect(response).toBeTruthy(Opportunities_response);
  });
});
