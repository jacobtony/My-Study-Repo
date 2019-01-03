import { Component, OnInit,EventEmitter,  Output } from '@angular/core';
import {CourseService} from '../services/course-service';
import {ErrorService} from '../services/error-service';
@Component({
  selector: 'app-courses',
  templateUrl: `courses.component.html`,
  styleUrls:['courses.component.css']
 
})
export class CoursesComponent implements OnInit{
  title = 'Courses Offered';
  
  constructor(private courseService:CourseService, private errorService:ErrorService){
  	
  }
  ngOnInit(){
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