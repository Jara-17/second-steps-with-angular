import { Task } from '@/shared/models/task';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
}
