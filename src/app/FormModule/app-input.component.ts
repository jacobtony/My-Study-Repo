import { Component, Input,  EventEmitter,  Output, OnChanges } from '@angular/core';

import './app-input.component.scss';

@Component({
  selector: 'app-input',
  templateUrl: `app-input.component.html`
 
})
export class AppInputComponent {
  

  constructor(){
    
  }
    @Input() InputValue:string;
    @Input() placeholderValue:string;
    @Output() InputValueChange = new EventEmitter<number>(); 
ngOninit(){
  debugger;
}

onChange(changedValue: any) {
  
  this.InputValueChange.emit(changedValue)
}


}