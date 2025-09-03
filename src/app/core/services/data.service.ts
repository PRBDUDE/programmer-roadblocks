import {inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class DataService<T> {
  protected httpClient = inject(HttpClient);
  protected apiUrl: string;

  protected constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.apiUrl);
  }

  getById(id: number): Observable<T> {
    return this.httpClient.get<T>(this.apiUrl + '/' + id);
  }

  create(item: T): Observable<T> {
    return this.httpClient.post<T>(this.apiUrl, item);
  }

  update(id: number, item: T): Observable<T> {
    return this.httpClient.put<T>(this.apiUrl + '/' + id, item);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/' + id);
  }
}
