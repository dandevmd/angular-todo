import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'TASK MANAGER';
  subscription: Subscription;
  isOpen: boolean = false;

  constructor(private ui: UiService) {
    this.subscription = ui
      .onToggle()
      .subscribe((value) => (this.isOpen = value));
  }

  toggleForm() {
    this.ui.toggleAddForm();
  }
}
