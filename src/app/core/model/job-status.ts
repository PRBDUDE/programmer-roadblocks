export interface JobStatus {
  "name": string,
  "percentage": number,
  "status": string,
  "message": string,
  "start": Date,
  "end"?: Date
}

export interface JobStatusRecord {
  "id": number,
  "disabled": boolean,
  "job": JobStatus
}
