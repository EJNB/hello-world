import { Component } from '@angular/core';
import { CoursesService } from './sevices/courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <h2 [textContent]="title"></h2>
    <p>{{ getTitle() }}</p>
    <ul>
      <li *ngFor="let c of courses">{{ c }}</li>
    </ul>

    <url [src]="title" />
  `
})
export class CoursesComponent{
  title = "List of courses";
  courses;

  constructor(private _service: CoursesService){
    this.courses = _service.getCourses();
  }

  getTitle(){
    return this.title;
  }
}