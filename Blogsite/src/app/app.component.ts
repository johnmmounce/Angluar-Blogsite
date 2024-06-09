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

  name?:string; 
  email?:string;
  address?:string;

  userArray: Array<any> = [];

  onClick(){
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    })

    console.log(this.userArray)
  }

  onDelete(index:any){
    this.userArray.splice(index, 1);
  }

}
