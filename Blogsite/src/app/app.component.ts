import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { log } from 'console';
import { Key } from 'readline';
import { stat } from 'fs';
import { NgForm, NgModel, Validators } from '@angular/forms';
import{ FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{


    form: any;

    constructor(){
      // make new istance of template form 
      this.form = new FormGroup({
        fullName: new FormControl('', [
          Validators.required,
          Validators.minLength(5)
        ]),
        email: new FormControl(),
        address: new FormControl()

      })


     }

    onSubmit(f:NgForm){
      console.log(f.value)
    }

    getValue(f:NgModel){
      console.log(f)
    }

}
