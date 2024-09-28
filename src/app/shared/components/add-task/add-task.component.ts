import { Task } from '@/shared/models/task';
import { TaskService } from '@/shared/services/task.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input() selectedDate: Date = new Date();
  @Output() close = new EventEmitter();

  mForm: FormGroup = new FormGroup({});

  private taskService = inject(TaskService);
  private fb = inject(FormBuilder);

  constructor() {
    this.mForm = this.fb.group({
      project: ['Demo', Validators.required],
      color: [''],
      title: [''],
      info: [''],
      start: [''],
      duration: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.mForm.value);
    const fData = this.mForm.value;
    const [hours, minutes] = fData.start.split(':');

    const mTask: Task = {
      title: fData.title,
      description: fData.description,
      project: fData.project,
      projectColor: fData.color,
      duration: fData.duration,
      startTime: new Date(
        this.selectedDate.setHours(hours, minutes, 0, 0)
      ).toISOString(),
      createdAt: new Date(),
    };

    this.taskService.saveTask(mTask);

    this.mForm.reset();
    this.closeModal();
  }

  closeModal() {
    this.close.emit();
  }
}
