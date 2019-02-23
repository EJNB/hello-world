import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { DataService } from '../common/data.services';

@Injectable()
export class PostService extends DataService{
  
  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
   }

  // getPosts(){
  //   return this.http.get(this.url)
  //     .catch(this.handleError);
  // }

  // createPost(post){
  //   return this.http.post(this.url, JSON.stringify(post))
  //     /* .catch((error: Response) => {
  //         if(error.status == 400)
  //            return Observable.throw(new BadInput());//expected error
  //          return Observable.throw(error.json());//unexpected error
  //     }) */
  //     .catch(this.handleError)
  // }

  // updatePOst(post){
  //   return this.http.patch(this.url+'/'+ post.id,JSON.stringify(post))
  //     .catch(this.handleError)
  // }

  // deletePost(id){
  //   return this.http.delete(this.url +'/' + id)
  //     /*aqui necesitamos retornar un obsevable q contenga un error, asi los consumidores de este servicio
  //     lo obtendran y haran algo con él*/
  //     /* if(error.status == 404)
  //       return Observable.throw(new NotFoundError());
  //     return Observable.throw(new AppError(error.json())); */
  //     .catch(this.handleError);
  // }

  // private handleError(error){
  //   if(error.status == 400)
  //     return Observable.throw(new BadInput());//expected error

  //   if(error.status == 404)
  //     return Observable.throw(new NotFoundError());
  //   return Observable.throw(new AppError(error.json()));
  // }

}
