import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskBarComponent } from '@/shared/components/task-bar/task-bar.component';
import { TaskListComponent } from '@/shared/components/task-list/task-list.component';
import { AddTaskComponent } from '@/shared/components/add-task/add-task.component';
import { TaskService } from '@/shared/services/task.service';
import { Task } from '@/shared/models/task';

@Component({
  selector: 'detail',
  standalone: true,
  imports: [DatePipe, TaskBarComponent, TaskListComponent, AddTaskComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {
  showAddTask: boolean = false;
  date?: Date;
  tasks: Task[] = [];

  private route: ActivatedRoute = inject(ActivatedRoute);
  private taskService = inject(TaskService);

  ngOnInit(): void {
    const paramDate =
      this.route.snapshot.paramMap.get('date')?.toString() ?? '';
    this.date = new Date(paramDate);

    this.loadData();
  }

  displayAddView() {
    this.showAddTask = !this.showAddTask;
    this.loadData();
  }

  loadData() {
    this.tasks = this.taskService.getTasksByDate(this.date!!);
  }
}
