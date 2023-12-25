import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // constructor(){}


  alertForm!: FormGroup;
  showSuccessMessage = false;

  constructor(private fb: FormBuilder,private dataService:DataService,) {
    this.alertForm = this.fb.group({
      name: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      unit: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      timeLimit: ['', Validators.required],
      status: ['pending'],
    });
  }

  onSubmit(formData: any): void {
    this.dataService.requestBlood(formData).subscribe();
    this.showSuccessMessage = true;
  }

  // Reset the form and hide the success message
  resetForm(): void {
    this.alertForm.reset();
    this.showSuccessMessage = false;
  }
}
