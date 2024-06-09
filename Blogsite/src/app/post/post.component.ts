import { Component, OnInit, Input, Output, EventEmitter, output } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title:string = "List of Posts";
  message:string = "message post";

  postParentMessage:string = "hello from the parent (post component)";

  childMessage:string= 'from child component';

  outputChildMessage:string = 'message from child component via output';

  @Input() fromParent:string = "";
  

  @Output() messageEvent = new EventEmitter<string>();



  constructor(){}

  ngOnInit(): void{

  }

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }
}
