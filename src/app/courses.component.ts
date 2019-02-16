import { Component } from '@angular/core';
import { CoursesService } from './sevices/courses.service';

@Component({
  selector: 'courses',
  template: `
    <!--<input 
          [value]="email" 
          (keyup.enter)="email= $event.target.value; onKeyUp()" 
          type="email" 
          class="form-control"
        />-->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" type="email" class="form-control"/>
  `
})
export class CoursesComponent{
  
  email = "me@example.com";

  onKeyUp(){    
    console.log(this.email);
  }
}