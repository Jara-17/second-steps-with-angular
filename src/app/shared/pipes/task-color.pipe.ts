import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskColor',
  standalone: true,
})
export class TaskColorPipe implements PipeTransform {
  transform(tasks: number): string {
    const colors = [
      'bg-slate-200 border-slate-300',
      'bg-green-300 border-green-400',
      'bg-green-400 border-green-500',
      'bg-green-500 border-green-600',
      'bg-green-600 border-green-700',
    ];
    return colors[tasks];
  }
}
