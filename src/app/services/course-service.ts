import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {ErrorService} from '../services/error-service'
import {AppComponent} from '../app.component';
import { ajax } from 'rxjs/ajax';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class CourseService {
  courses = [{courseName : "Electronics", courseId:0}, {courseName:"Computer Science", courseId:1}, {courseName:"Mechanical", courseId:2}];
 
  constructor(private http: HttpClient,private errorHandler:ErrorService) { 
  	
  }
  getCourses(){
    return ajax("http://localhost:8000/courses");
   
  	  
  
  }


  handleError(err){
   
    
    return throwError(err);

}
  
  addCourse(course){
    var newCourse = {courseName:course, courseId:"006"};
   
  	return ajax.post("http://localhost:8000/add-course", newCourse,httpOptions)
    
  }
  deleteCourse(course){
    
  	return this.http.post("http://localhost:8000/delete-course/", course, httpOptions)
      .pipe(
        tap((response)=> console.log(response)),
        catchError((response)=> console.log(response))
      );
  }
  getCourseDetail(courseId){
  	return this.http.get("http://localhost:8000/course-detail/"+courseId)
      .pipe(
        tap((response)=> console.log(response)),
        catchError((response)=> console.log(response))
      );
  }
  editCourse(course){
    
    return this.http.post("http://localhost:8000/edit-course/", course, httpOptions)
      .pipe(
        tap((response)=> console.log(response)),
        catchError((response)=> console.log(response))
      );
  }
 
}