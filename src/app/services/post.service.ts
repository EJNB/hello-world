import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class PostService {
  private url: string = 'http://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post))
      .catch((error: Response) => {
        if(error.status == 400)
          return Observable.throw(new BadInput());//expected error
        return Observable.throw(new AppError(error.json()));//Unexpected error
      })
  }

  updatePOst(post){
    return this.http.patch(this.url+'/'+ post.id,JSON.stringify(post))
  }

  deletePost(id){
    return this.http.delete(this.url +'/' + id)
      /*aqui necesitamos retornar un obsevable q contenga un error, asi los consumidores de este servicio
      lo obtendran y haran algo con él*/
      .catch((error: Response)=>{
        if(error.status == 404)
          return Observable.throw(new NotFoundError());
        return Observable.throw(new AppError(error.json()));
      });
  }

}
