import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import {AppInputComponent} from './app-input.component'

@NgModule({
 imports: [
      BrowserModule, FormsModule
 ],
 declarations: [ AppInputComponent],
 exports: [AppInputComponent]
})
export class AppFormsModule {




}