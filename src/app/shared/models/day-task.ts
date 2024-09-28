import { IDayTask } from './interfaces/iday-task';
import { Task } from './task';

export class DayTask implements IDayTask {
  date = new Date();
  isCurrentMonth = false;
  tasks: Task[] = [];
}
