import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  _KEYTASK = 'dayTask';

  constructor() {}

  saveTask(task: Task) {
    const storedTasks = localStorage.getItem(this._KEYTASK);
    let parsedTasks: Task[] = [];

    if (storedTasks) {
      parsedTasks = JSON.parse(storedTasks);
    }

    parsedTasks.push(task);
    localStorage.setItem(this._KEYTASK, JSON.stringify(parsedTasks));
  }

  getAllTasks(): Task[] {
    const storedTasks = localStorage.getItem(this._KEYTASK);
    let parsedTasks: Task[] = [];

    if (storedTasks) {
      parsedTasks = JSON.parse(storedTasks);
    }

    return parsedTasks;
  }

  getTasksByDate(date: Date): Task[] {
    const parsedTasks = this.getAllTasks();
    const targetDate = new Date(date);

    return parsedTasks.filter((task) => {
      const taskDate = new Date(task.startTime);
      return (
        taskDate.getDate() === targetDate.getDate() &&
        taskDate.getMonth() === targetDate.getMonth() &&
        taskDate.getFullYear() === targetDate.getFullYear()
      );
    });
  }
}
