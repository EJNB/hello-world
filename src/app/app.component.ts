import { Component, Output } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  post = {
    title: "Angular app",
    isFavorite: true
  };

  onFavoriteChange(isFavorite: FavoriteChangedEventArgs ){
    console.log(isFavorite.newValue);    
  }
}
