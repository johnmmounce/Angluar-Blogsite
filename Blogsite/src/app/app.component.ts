import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { log } from 'console';
import { Key } from 'readline';
import { stat } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  title:string = "Angular";
  count:number= 123412;
  decimal: number= 2.13414423
  price: number= 99.99

  dummyText: string = "agfhdjdghsfghdsrtlms'd;fklgjs';ldkfvbm'sdl;kfrgjs';ldckfv,mb'sdl;fkgj;sldfkjs'df;lkgj"
  
  today:Date = new Date();

  postObj : object = {
    id: 1,
    postTitle: 'post 1'
  }

  postArray: Array<string> = [
    "post1",
    "post2",
    "post3",
    "post4",
    "post5",
    "post6"
  ]

  userDetails = {
    name: "user 1",
    city: "newyork",
    countryCode: "US"
  }


}
