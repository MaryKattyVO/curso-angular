import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

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
      price: new FormControl(null, [Validators.required, this.minPrice(10)]),
      url: new FormControl(null),
    });
  }
  onSubmit() {
    console.log('Submit', this.courseAddForm);
  }
  
  get description (){
    return this.courseAddForm.get('description');
  }
  get price(){
    return this.courseAddForm.get('price');
  }
  minPrice(minPrice: number): ValidatorFn {
    return(control: AbstractControl): {[key: string]: any} | null => {
      if(control.value !== undefined && control.value <= minPrice){
        return {
          'minPrince' : true
        } 
      }
      else {
        return  null;
      }
    }
  }
}

