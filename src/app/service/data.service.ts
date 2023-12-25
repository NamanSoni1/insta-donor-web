import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

   url = 'http://103.186.184.179:3003/api'

  registerDonor(data:any){
   return this.http.post(`${this.url}/employee`,data)
  }

  requestBlood(data:any){
   return this.http.post(`${this.url}/blood-request`,data)
  }
}
