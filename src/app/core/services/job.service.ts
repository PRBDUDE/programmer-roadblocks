import {Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {JobStatusRecord} from "@model/job-status";
import {environment} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JobService extends DataService<JobStatusRecord>{

  constructor() {
    super(environment.jobStatusUrl);
  }
}
