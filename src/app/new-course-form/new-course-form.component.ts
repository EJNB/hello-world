import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  form = new FormGroup({
    topics: new FormArray([])
  });

  constructor() { }

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value="";
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

}
