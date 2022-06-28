import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { ResponseI } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  postItem(item:Item):Observable<ResponseI>{
    let direction = this.url + "api/item";
    return this.http.post<ResponseI>(direction,item);
  }
}
