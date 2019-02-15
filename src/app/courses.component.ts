import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <p>{{ getTitle() }}</p>
    <ul>
      <li *ngFor="let c of courses">{{ c }}</li>
    </ul>
  `
})
export class CoursesComponent{
  title = "List of courses";
  courses: string[] = ["C#", "Angular", "ElasticSearch"];

  getTitle(){
    return this.title;
  }
}