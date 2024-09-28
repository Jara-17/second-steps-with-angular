import { Component, inject, OnInit } from '@angular/core';
import { DayTask } from '@/shared/models/day-task';
import { TaskService } from '@/shared/services/task.service';
import { BlockItemComponent } from '../block-item/block-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'month-card',
  standalone: true,
  imports: [BlockItemComponent],
  templateUrl: './month-card.component.html',
  styleUrl: './month-card.component.css',
})
export class MonthCardComponent implements OnInit {
  selectedDate = new Date();

  weeks: DayTask[][] = [];

  private ts: TaskService = inject(TaskService);
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar() {
    const currentYear = new Date().getUTCFullYear();

    const firstDayOfMonth = new Date(
      Date.UTC(currentYear, this.selectedDate.getUTCMonth(), 1)
    );
    const lastDayOfMonth = new Date(
      Date.UTC(currentYear, this.selectedDate.getUTCMonth() + 1, 0)
    );

    const startDate = new Date(firstDayOfMonth);
    startDate.setUTCDate(
      startDate.getUTCDate() - ((startDate.getUTCDay() + 6) % 7)
    ); // Ajustar al lunes anterior

    const endDate = new Date(lastDayOfMonth);
    endDate.setUTCDate(endDate.getUTCDate() + ((7 - endDate.getUTCDay()) % 7)); // Ajustar al domingo siguiente

    this.weeks = [];
    let currentWeek: DayTask[] = [];

    for (
      let d = new Date(startDate);
      d <= endDate;
      d.setUTCDate(d.getUTCDate() + 1)
    ) {
      if (currentWeek.length === 7) {
        this.weeks.push(currentWeek);
        currentWeek = [];
      }

      currentWeek.push({
        date: this.toLocalDate(d),
        isCurrentMonth: d.getUTCMonth() === this.selectedDate.getUTCMonth(),
        tasks: this.ts.getTasksByDate(d),
      });
    }

    if (currentWeek.length > 0) {
      this.weeks.push(currentWeek);
    }
  }

  // Método para convertir fecha UTC a local
  private toLocalDate(utcDate: Date): Date {
    return new Date(
      utcDate.getUTCFullYear(),
      utcDate.getUTCMonth(),
      utcDate.getUTCDate()
    );
  }

  detail(day: Date) {
    this.router.navigate(['detail', day.toISOString()]);
  }
}
