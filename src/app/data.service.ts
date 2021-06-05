import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private hc:HttpClient) { }

  getdata():Observable<any>{
    return  this.hc.get("https://jsonplaceholder.typicode.com/posts");
  }

}
