import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../shared/interfaces/event';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  create(event: IEvent) {
    const url = `appdata/${environment.appKey}/events`;
    return this.http.post(url, { event });
  }
}
