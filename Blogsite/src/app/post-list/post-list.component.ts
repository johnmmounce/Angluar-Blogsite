import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {

  @Input() fromPostParent:string = "";
  postList ?: Array<any>;

  constructor(private postService: PostService) {
    this.postList =  postService.postList;
  }

  ngOnInit(): void{

  }

}
