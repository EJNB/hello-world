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

    <button class="btn btn-primary" [class.active]="isActive">Save</button>
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

  getTitle(){
    return this.title;
  }
}