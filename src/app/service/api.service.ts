import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://randomuser.me/api?results=1';

  constructor(private http: HttpClient) { }

  public getData(): Observable<Data> {
    return this.http.get<Data>(this.urlApi);
  }
}
