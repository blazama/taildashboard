import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  public getData(): Observable<[]> {
    return this.http.get<[]>(this.urlApi);
  }
}
