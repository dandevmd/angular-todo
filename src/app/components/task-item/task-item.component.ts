import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Itask } from '../../shared/app-types';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task!: Itask;
  @Output() onDeleteTaskEvent = new EventEmitter<Itask>();
  @Output() onToggleReminder = new EventEmitter<Itask>();

  faTimes = faTimes;

  onDelete(task: Itask) {
    this.onDeleteTaskEvent.emit(task);
  }

  onToggle(task: Itask) {
    this.onToggleReminder.emit(task);
  }
}
