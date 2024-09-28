import { ITask } from './interfaces/itask';

export class Task implements ITask {
  title = '';
  description = '';
  project = '';
  projectColor = '';
  duration = 0;
  startTime = '';
  createdAt = new Date();
}
