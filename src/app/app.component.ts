import { Component, OnInit } from '@angular/core';
import {CourseService} from './services/course-service';
import {ErrorService} from './services/error-service';
import { Observable, of } from 'rxjs'; 
@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls:['app.component.css']
 
})
export class AppComponent implements OnInit{
  title = 'Courses Offered';
  courses = [];
  errorMessage = "";
  constructor(private courseService:CourseService, private errorHandler:ErrorService){
  	 errorHandler.ErrorEmitted.subscribe(
        err => {
            this.errorMessage = "No Courses to display";
            
        });
  }
  ngOnInit(){
   this.time = new Observable(observer =>
    setInterval(() => observer.next(new Date().getTime()), 1000)
  );
   }
   clearError(){
    this.errorMessage = ''; 
   }

}
