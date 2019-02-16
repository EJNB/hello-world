import { Component } from '@angular/core';
import { CoursesService } from './sevices/courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>

    <button [style.backgroundColor]="isActive ? 'blue' : 'white' " class="btn btn-primary" [class.active]="isActive">Save</button>
    <button (click)="onSave($event)" class="btn btn-default">Clic me</button>
  `
})
export class CoursesComponent{
  title = "List of courses";
  courses;
  colSpan = 2;
  isActive = true;

  constructor(private _service: CoursesService){
    this.courses = _service.getCourses();
  }

  onSave($event){
    alert("Hello world");
    console.log($event)
  }

  getTitle(){
    return this.title;
  }
}