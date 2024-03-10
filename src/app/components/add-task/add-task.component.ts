import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itask } from '../../shared/app-types';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() onAddTask = new EventEmitter<Itask>();
  isDisplayed: boolean = false;
  displayChangeSubscription: Subscription;

  constructor(private ui: UiService) {
    this.displayChangeSubscription = ui
      .onToggle()
      .subscribe((value) => (this.isDisplayed = value));
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
    }

    const newTask = {
      text: this.text,
      day: this.day || new Date().toDateString(),
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
    this.clearForm();
  }

  clearForm() {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
