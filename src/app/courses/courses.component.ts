import { Component, OnChanges, OnInit,SimpleChanges, EventEmitter,   Output } from '@angular/core';
import {CourseService} from '../services/course-service';
import {ErrorService} from '../services/error-service';
import {AppInputComponent} from './FormModule/app-input.component';
import './courses.component.scss';

@Component({
  selector: 'app-courses',
  templateUrl: `courses.component.html`
 
})
export class CoursesComponent implements OnChanges{
  title = 'Courses Offered';

  constructor(private courseService:CourseService, private errorService:ErrorService){
  	
  }
  ngOnChanges(simpleChanges : SimpleChanges){
    debugger;
    console.log(simpleChanges); 
  }  
  ngOnInit(){
    debugger; 
  	this.courseService.getCourses().subscribe(res => {this.courses = res.response;console.log('HTTP response', res)},
        err =>this.errorService.emitChange(err),
        () => console.log('HTTP request completed.'))
  }
  
  addCourse(courseName){

    this.courseService.addCourse(courseName).subscribe(response => {this.courses = response.response;this.courseName = "";console.log(response);});
  }
  deleteCourse(course){
      var deletedCourse = {"courseName":course.courseName, "courseId":course.courseId, "_id":course._id};
      this.courseService.deleteCourse(deletedCourse).subscribe(response => {console.log(response);this.courses = response});
  
  }

}