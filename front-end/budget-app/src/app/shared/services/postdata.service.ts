import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient) { }

  postData(url:string, body: any){
    return this.http.post(url, body, this.httpOptions)
  
      
  }
    
}
