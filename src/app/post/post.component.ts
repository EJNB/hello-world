import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];  

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts()
      .subscribe(posts => {
        this.posts = posts.json();
      });
  }

  //Este title recibido como argumento es de tipo HTMLInput
  createPost(input: HTMLInputElement){
    //console.log(title);
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe( response =>{ 
        post['id'] = response.json().id;
        this.posts.splice(0,0,post);
        console.log(response.json())
      });
  }

  //update post
  updatePost(post){
    this.service.updatePOst(post)
      .subscribe(response => console.log(response))
  }

  deletePost(post){
    this.service.deletePost(post.id).subscribe(response=> {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}

/* therea are multiple life cycle hooks in Angular
* OnInit
* OnChange
* DoCheck
* AfterContentInit  
*/
