import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
}) 
export class ErrorService {
    
    private emitChangeSource = new Subject<any>();
   
    ErrorEmitted = this.emitChangeSource.asObservable();
    
    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }
}