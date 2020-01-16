import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ed-course-add-reactive',
  templateUrl: './course-add-reactive.component.html',
  styleUrls: ['./course-add-reactive.component.css']
})
export class CourseAddReactiveComponent implements OnInit {

  courseAddForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.courseAddForm = new FormGroup({
      name: new FormControl('Angular desde 0'),
      description: new FormControl(null),
      price: new FormControl(null),
      img: new FormControl(null),
    });
  }
  onSubmit() {
    console.log('Submit', this.courseAddForm);
  }
}

