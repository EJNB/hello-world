import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
  url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(posts => {
        this.posts = posts.json();
      });
  }

  //Este title recibido como argumento es de tipo HTMLInput
  createPost(input: HTMLInputElement){
    //console.log(title);
    let post = { title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe( response =>{ 
        post['id'] = response.json().id;
        this.posts.splice(0,0,post);
        console.log(response.json())
      });
  }

  //update post
  updatePost(post){
    this.http.patch(this.url+'/'+ post.id,JSON.stringify(post))
      .subscribe(response => console.log(response))
  }

  deletePost(post){
    this.http.delete(this.url +'/' + post.id).subscribe(response=> {
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
