import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course-service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { inspect } from 'util';
import './course-detail.component.scss'; 
@Component({ 
  selector: 'app-course-details',
  templateUrl: `course-detail.component.html`
 }) 

  export class CourseDetailComponent implements OnInit{
  title = 'Courses Offered';
  courses = [];
  user = {};
  selectedCourse = {};
    constructor(private fb: FormBuilder, private courseService:CourseService, private route: ActivatedRoute, private location: Location) {
        
    } 
     
 
ngOnInit(){
   this.myForm = this.fb.group({

          "studentForm":this.fb.group({

            "firstName":  ['',[Validators.minLength(5), Validators.required] ],
            "email":['', Validators.email],
            "previousCourses":this.fb.group({
              "courseName":[''],
                "yearOfCompletion":[''],
                "proficiency":['']

              })
            })
        })
  	this.courseService.getCourseDetail(this.route.snapshot.params.courseId).subscribe(response => {this.selectedCourse = response;console.log(response);this.courseName=this.selectedCourse.courseName});
   this.myForm.valueChanges.subscribe((value) => {console.log(this.myForm)}); 

  }


  editCourse(courseName){
    var editedCourse = {"courseName":courseName, "courseId":this.selectedCourse.courseId,"students":this.selectedCourse.students?this.selectedCourse.students:[], "_id":this.selectedCourse._id};
    this.courseService.editCourse(editedCourse).subscribe(response => {this.selectedCourse = response;console.log(response);this.courseName=this.selectedCourse.courseName});
  
  }


  onSubmit(modal){

    
    var editedCourse = {"courseName":this.selectedCourse.courseName, "courseId":this.selectedCourse.courseId, "students":this.selectedCourse.students?this.selectedCourse.students:[], "_id":this.selectedCourse._id};
     editedCourse.students.push(this.myForm.value.studentForm);
     this.courseService.editCourse(editedCourse).subscribe(response => {this.selectedCourse = response;console.log(response);
      this.courseName=this.selectedCourse.courseName;modal.close()
      });
  
  }
}