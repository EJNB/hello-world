import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    
  constructor(private url: string, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
      .map(post => post.json())
      .catch(this.handleError);
  }

  create(post){
    return this.http.post(this.url, JSON.stringify(post))
      /* .catch((error: Response) => {
          if(error.status == 400)
        return Observable.throw(new BadInput());//expected error
      }) */
      .map(post => post.json())
      .catch(this.handleError)
  }

  update(data){
    return this.http.patch(this.url+'/'+ data.id,JSON.stringify(data))
      .map(post => post.json())
      .catch(this.handleError)
  }

  delete(id){
    return this.http.delete(this.url +'/' + id)
      /*aqui necesitamos retornar un obsevable q contenga un error, asi los consumidores de este servicio
      lo obtendran y haran algo con él*/
      /* if(error.status == 404)
        return Observable.throw(new NotFoundError());
      return Observable.throw(new AppError(error.json())); */
      .map(post => post.json())
      .catch(this.handleError);
  }

  private handleError(error){
    if(error.status == 400)
      return Observable.throw(new BadInput());//expected error

    if(error.status == 404)
      return Observable.throw(new NotFoundError());
    return Observable.throw(new AppError(error.json()));
  }

}
