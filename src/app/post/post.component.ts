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

  constructor(private http: Http) { 
    http.get(this.url)
      .subscribe(posts => {
        this.posts = posts.json();
      })
  }

  ngOnInit() {
  }

  //Este title recibido como argumento es de tipo HTMLInput
  createPost(input: HTMLInputElement){
    //console.log(title);
    let post = { title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe( response =>{ 
        post['id'] = response.json().id;
        console.log(response.json())
      });
  }

}
