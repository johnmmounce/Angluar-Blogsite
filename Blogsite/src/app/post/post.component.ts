import { Component, OnInit, Input, Output, EventEmitter, output } from '@angular/core';
import { log } from 'console';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts ?: Array<any>;
  
  constructor(){
    let postService = new PostService()
    this.posts = postService.postList;
  }

  ngOnInit(): void{

  }
}
