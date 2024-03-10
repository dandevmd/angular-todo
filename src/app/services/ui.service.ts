import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private addToggleOpen: boolean = false;
  private toggleSubject = new Subject<boolean>();

  toggleAddForm() {
    this.addToggleOpen = !this.addToggleOpen;
    this.toggleSubject.next(this.addToggleOpen); //emit the changes
  }

  onToggle() {
    return this.toggleSubject.asObservable();
  }
}
