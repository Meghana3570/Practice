import { Component, OnInit, EventEmitter } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent implements OnInit {
   public data:any = [];
   searchTerm = "" ;
   find = "";
  constructor(private ds:DataService) {  }

  ngOnInit(): void {
    this.ds.getdata().subscribe(
      res=>{
        this.data = res;
        console.log(this.data)
      },
      err=>{
        alert('Something went wrong');
        console.log(err);
      }
    );
  }
  test(x:string)
  {
    this.find=x;
  }
}
