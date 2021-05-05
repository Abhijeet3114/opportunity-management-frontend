import { Component, OnInit } from '@angular/core';
import { Opportunity } from '../opportunity';
import { OpportunityListComponent } from '../opportunity-list/opportunity-list.component';
import { OpportunityService } from '../opportunity.service';

@Component({
  selector: 'app-opportunity-trends',
  templateUrl: './opportunity-trends.component.html',
  styleUrls: ['./opportunity-trends.component.css']
})
export class OpportunityTrendsComponent implements OnInit {

  opportunities: Opportunity[] = [];
  start_date: Date = new Date();
  end_date: Date = new Date();
  //update$: Subject<any> = new Subject();

  // Update function
  //updateChart() {
  //  this.update$.next(true);
  //}
  constructor(private opportunityservice: OpportunityService) { }


  public summarrydata: object[] = [];
  //public temp_summarrydata: object[] = [];
  public locationData: object[] = [];

  ngOnInit(): void {
    this.opportunityservice.getAllOpportunities().subscribe(data => {
      this.summarrydata = [];
      this.locationData = [];
      this.opportunities = data;
      //this.summarrydata = [...this.temp_summarrydata];
      console.log("ALL?",this.opportunities);
      this.multidata_OpportunitiesLocationRoleValue();
      this.locationVacancy();
    });
  }

  yearwisetrend() {
    console.log(this.start_date);
    this.ngOnInit();
    //this.update$.next(true);
  }

  multidata_OpportunitiesLocationRoleValue() {
    let obj = new Map();
    for (let i = 0; i < this.opportunities.length; i++) {
      console.log(this.opportunities[i].publishDate, " is smaller than", this.start_date, "result", this.opportunities[i].joiningDate < this.start_date);
      if (this.opportunities[i].publishDate <= this.start_date || this.opportunities[i].publishDate >= this.end_date) {
        console.log("Skipped",this.opportunities[i]);
        continue;
      }
      let location = this.opportunities[i].joiningLocation?.split("/");
      if (location) {
        for (let j = 0; j < location.length; j++) {
          location[j] = location[j].trim().toUpperCase();
          let series = new Map();
          if (obj.get(location[j])) {
            series = obj.get(location[j]);
            let value = 1;
            for (let [k, v] of series) {
              if (series.get(this.opportunities[i].role?.trim().toUpperCase())) {
              value = series.get(this.opportunities[i].role?.trim().toUpperCase()) + 1;
              //value = v + value;
              }
            }
            series.set(this.opportunities[i].role?.trim().toUpperCase(), value);
          }
          else {
            series.set(this.opportunities[i].role?.trim().toUpperCase(), 1);
          }
          obj.set(location[j], series);

        }
      }
    }
    //console.log("obj ",obj);

    for (let [k, v] of obj) {
      let series = [];
      for (let [k1, v1] of v) {
        let t = {
          name: k1,
          value: v1
        }
        series.push(t);
      }
      let tmp = {
        name: k,
        series: series
      };
      this.summarrydata.push(tmp);
    }
    obj.clear();
   console.log("Summarry Data", this.summarrydata);
  }

  locationVacancy(): void {
    let obj = new Map();
    for (let i = 0; i < this.opportunities.length; i++) {
      let t: number = 1;

      let st = this.opportunities[i].joiningLocation?.toUpperCase();
      
      if (obj.get(st)) {
        //t++;
        t = obj.get(st) + 1;
        obj.set(st, t);
      }
      obj.set(st, t);
      //console.log("Iteration ", i, " ", st, ": count = ", obj.get(st));
    }
    //console.log("location Object", obj);
    for (let [k, v] of obj) {
      let tmp = {
        name: k,
        value: v,
      };
      this.locationData.push(tmp);
    }
    obj.clear();
    //console.log("Final location",this.locationData);
  }

  view: any = [1200, 500];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  timeline = true;
  showLabels = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'],
  };
}
