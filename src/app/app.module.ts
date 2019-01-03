import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {ModalModule} from 'angular-custom-modal'
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {CoursesComponent} from './courses/courses.component';
import { AppRoutingModule }     from './app-routing.module';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
@NgModule({
   bootstrap: [ AppComponent ],
 imports: [
     BrowserModule,AppRoutingModule, FormsModule,HttpClientModule, ReactiveFormsModule, ModalModule
 ],
 declarations: [ AppComponent, CoursesComponent, CourseDetailComponent],
 providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {
}
