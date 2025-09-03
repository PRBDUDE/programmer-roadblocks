import {Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {JobStatusRecord} from "@model/job-status";

@Injectable({
  providedIn: 'root'
})
export class JobService extends DataService<JobStatusRecord>{

  constructor() {
    super('http://localhost:3000/jobs');
  }
}
