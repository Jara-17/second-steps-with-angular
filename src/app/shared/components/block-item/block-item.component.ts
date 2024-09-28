import { DatePipe, NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { DayTask } from '@/shared/models/day-task';
import { Router } from '@angular/router';
import { TaskColorPipe } from '@/shared/pipes/task-color.pipe';

@Component({
  selector: 'block-item',
  standalone: true,
  imports: [NgClass, DatePipe, TaskColorPipe],
  templateUrl: './block-item.component.html',
  styleUrl: './block-item.component.css',
})
export class BlockItemComponent {
  @Input() day: DayTask = new DayTask();
  isTooltipVisible: boolean = false;
  private router: Router = inject(Router);

  showTooltip() {
    this.isTooltipVisible = true;
  }

  hideTooltip() {
    this.isTooltipVisible = false;
  }

  detail() {
    this.router.navigate(['/detail', this.day?.date.toISOString()]);
  }
}
