import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private http:HttpClient) {    }
    getData():any {
        let url="https://reqres.in/api/users?page=1";
        return this.http.get(url);
      }
}

