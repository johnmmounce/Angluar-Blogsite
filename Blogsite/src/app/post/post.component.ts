import { Component, OnInit, Input, Output, EventEmitter, output } from '@angular/core';
import { log } from 'console';
import { PostService } from '../Services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts ?: Array<any>;
  
  constructor(private postService: PostService){
    // let postService = new PostService()
    this.posts = postService.postList;
  }

  ngOnInit(): void{

  }

  addNewData(){
    let newPost: Post = {
      id: 7, postTitle: "Post 7"
    }

    this.postService.addPost(newPost);
  }
}
