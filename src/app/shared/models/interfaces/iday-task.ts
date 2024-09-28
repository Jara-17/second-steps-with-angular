import { ITask } from './itask';

export interface IDayTask {
  date: Date;
  isCurrentMonth: boolean;
  tasks: ITask[];
}
