import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import {CourseDetailComponent} from './course-detail/course-detail.component'
const routes:Routes = [
  { path: 'courses', component: CoursesComponent },
  {path:'course-detail/:courseId', component:CourseDetailComponent}
];
@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}