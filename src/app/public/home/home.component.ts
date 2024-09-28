import { MonthCardComponent } from '@/shared/components/month-card/month-card.component';
import { Component } from '@angular/core';
@Component({
  selector: 'home',
  standalone: true,
  imports: [MonthCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
