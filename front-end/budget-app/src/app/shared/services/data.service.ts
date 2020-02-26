import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http:HttpClient) { }

  getData(url:string){
    return this.http.get(url)
  }

  postData(url:string, body: any){
    return this.http.post(url, body, this.httpOptions)
  }

  // getItems(): Observable<Item[]> {
  //   return of(ITEMS)
  // }

  // getItem(id: number | string) {
  //   return this.getItems().pipe(
  //     map((items:Item[]) => items.find(item => item.id === +id))
  //   );
  // }
}
