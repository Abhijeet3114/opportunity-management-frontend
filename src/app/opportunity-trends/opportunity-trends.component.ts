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
  constructor(private opportunityservice: OpportunityService) { }

  ngOnInit(): void {
    this.opportunityservice.getAllOpportunities().subscribe(data => {
      this.opportunities = data;
      console.log("ALL?",this.opportunities);
      this.tlv();
      this.locationVacancy();
    });
  }

  public summarrydata: object[] = [];
  public locationData: object[] = [];

  tlv() {
    let obj = new Map();
    for (let i = 0; i < this.opportunities.length; i++) {
      let location = this.opportunities[i].joiningLocation?.split("/");
      if (location) {
        for (let j = 0; j < location.length; j++) {
          location[j] = location[j].trim().toUpperCase();
          let series = new Map();
          if (obj.get(location[j])) {
            series = obj.get(location[j]);
            let value = 1;
            for (let [k, v] of series) {
              if (k == this.opportunities[i].role?.trim().toUpperCase()) {
                value = v + value;
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
   // console.log("tlv", this.summarrydata);
  }

  locationVacancy(): void {
    let obj = new Map();
    for (let i = 0; i < this.opportunities.length; i++) {
      let t: any = 1;
      let st = this.opportunities[i].joiningLocation?.toUpperCase();
      if (obj.get(st)) {
        t++;;
      }
      obj.set(st, t);
    }
    for (let [k, v] of obj) {
      let tmp = {
        name: k,
        value: v,
      };
      this.locationData.push(tmp);
    }
    obj.clear();
    console.log("location",this.locationData);
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
