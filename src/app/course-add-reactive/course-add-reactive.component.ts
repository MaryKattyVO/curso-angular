import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      price: new FormControl(null, Validators.required),
      img: new FormControl(null),
    });
  }
  onSubmit() {
    console.log('Submit', this.courseAddForm);
  }
}

