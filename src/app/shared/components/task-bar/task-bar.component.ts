import { Task } from '@/shared/models/task';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'task-bar',
  standalone: true,
  imports: [],
  templateUrl: './task-bar.component.html',
  styleUrl: './task-bar.component.css',
})
export class TaskBarComponent {
  @Input() tasks: Task[] = [];
}
