import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { log } from 'console';
import { Key } from 'readline';
import { stat } from 'fs';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

    constructor(){ }

    onSubmit(f:NgForm){
      console.log(f)
    }

    getValue(f:NgModel){
      console.log(f)
    }

}
