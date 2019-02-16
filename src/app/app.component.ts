import { Component, Output } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  courses = [
    { id: 1, name: 'C Sharp'},
    { id: 2, name: 'Nodejs'},
    { id: 3, name: 'Exoressjs'},
    { id: 4, name: 'Mongodb'},
    { id: 5, name: 'Mongoose'},
    { id: 6, name: 'ElasticSearch'},
    { id: 7, name: 'SQL'},
  ];
  viewMap = "somethinElse";
  canSave= true;

  post = {
    title: "Angular app",
    isFavorite: true
  };

  task= {
    title: "Review applications",
    assigne: {
      name: null
    }
  }

  onFavoriteChange(isFavorite: FavoriteChangedEventArgs ){
    console.log(isFavorite.newValue);    
  }

  addCourse(){
    this.courses.push({id:8, name: ".Net Core"})
  }

  removeCourse(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
