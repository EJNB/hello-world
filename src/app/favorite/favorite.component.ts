import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isSelected: boolean;
  @Output('change') click= new EventEmitter();

  constructor() { }

  ngOnInit() {
    //this.isSelected = true;
  }

  onClick(){
    this.isSelected = ! this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
