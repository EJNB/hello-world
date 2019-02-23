import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Response } from '@angular/http';
import { AppError } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];  

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  //Este title recibido como argumento es de tipo HTMLInput
  createPost(input: HTMLInputElement){
    //console.log(title);
    let post = { title: input.value };
    input.value = '';
    this.service.create(post)
      .subscribe(
        newPost =>{ 
          post['id'] = newPost.id;
          this.posts.splice(0,0,post);
          console.log(newPost)
        },
        (error: AppError) => {
          if(error instanceof BadInput)
            //this.form.setErrors(error.originalError);//como aprendimos en la seccion anterior reactive forms
          alert('An unexpected error occurred.');
          console.log(error);
        }
      );
  }

  //update post
  updatePost(post){
    this.service.update(post)
      .subscribe(updatedPost => console.log(updatedPost))
  }

  deletePost(post){
    // this.service.deletePost(post.id).subscribe(
    this.service.delete(365).subscribe(
      ()=> {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if(error instanceof NotFoundError)
          alert('This Post has already been delete');
        else throw error;
      }
    );
  }
}

/* therea are multiple life cycle hooks in Angular
* OnInit
* OnChange
* DoCheck
* AfterContentInit  
*/