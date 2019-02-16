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
    <br>
    <div>
      {{ course.title | uppercase }}<br>
      {{ course.students | number }}<br>
      {{ course.raiting | number :'1.2-2' }}<br>
      {{ course.price | currency:'AUD':true:'3.2-2' }}<br>
      {{ course.releaseDate | date:'shortDate' }}<br>
    </div>
  `
})
export class CoursesComponent{
  course = {
    title : "The complete angular course",
    raiting: 4.9745,
    students : 30123,
    price: 190.95,
    releaseDate: new Date(2016,3,1)
  }

  email = "me@example.com";

  onKeyUp(){    
    console.log(this.email);
  }
}