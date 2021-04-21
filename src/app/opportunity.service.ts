import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opportunity } from './opportunity';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  private base_url = 'http://localhost:8080/api/v1/opportunities';
  constructor(private httpClient: HttpClient) { }

  getOpportunities(): Observable<Opportunity[]> {
    return this.httpClient.get<Opportunity[]>(`${this.base_url}`);
  }

  getAllOpportunities(): Observable<Opportunity[]> {
    return this.httpClient.get<Opportunity[]>(`${this.base_url}/all`);
  }

  createOpportunity(opportunity: Opportunity): Observable<Object> {
    return this.httpClient.post(`${this.base_url}`, opportunity);
  }

  getOpportunityById(id: number): Observable<Opportunity> {
    return this.httpClient.get<Opportunity>(`${this.base_url}/${id}`);
  }

  updateOpportunity(id: number, opportunity: Opportunity): Observable<Object> {
    return this.httpClient.put(`${this.base_url}/${id}`, opportunity);
  }

  deleteOpportunity(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.base_url}/${id}`);
  }

  searchOpportunityByRole(role: string): Observable<Opportunity[]> {
    return this.httpClient.get<Opportunity[]>(`${this.base_url}/search/${role}`);
  }
}
