import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  list():Observable<any>{
    let url = this.url + "api/item/"
    return this.http.get(url);
  }

  post(item:Item):Observable<any>{
    let url = this.url + "api/item/";
    let value = {"title":item.title,"text":item.text,"img":item.img};
    return this.http.post(url,item);
  }

  delete(i:number):Observable<any>{
    let url = this.url + "api/item/" + i;
    return this.http.delete(url);
  }

  put(item:Item):Observable<any>{
    let url = this.url + "api/item/" + item.id;
    return this.http.put(url,item);
  }

  putNotImg(item:Item):Observable<any>{
    let url = this.url + "api/item/" + item.id;
    let value = {"title":item.title,"text":item.text};
    return this.http.put(url,value);
  }

  get(i:number):Observable<any>{
    let url = this.url + "api/item/" + i;
    return this.http.get(url);
  }
}
