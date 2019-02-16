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
    <button (click)="onSave($event)" class="btn btn-default">Clic me</button><br>
    <input #email (keyup.enter)="onKeyUp($event,email.value)" type="email" class="form-control"/>
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

  onKeyUp($event, email){
    console.log("the key Enter Key was pressed", $event.target.value);
    console.log(email);
  }

  getTitle(){
    return this.title;
  }
}