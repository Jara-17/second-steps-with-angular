import { IDayTask } from './interfaces/iday-task';
import { ITask } from './interfaces/itask';

export class DayTask implements IDayTask {
  date = new Date();
  isCurrentMonth = false;
  tasks: ITask[] = [];
}
