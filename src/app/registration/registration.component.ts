import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers:[DataService],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})  
export class RegistrationComponent {

  constructor(private dataService:DataService){}

  profileForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    number: new FormControl(''),
    email: new FormControl(''),
    bloodGroup: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    file: new FormControl(''),
  });
  
  onSubmit(data: any){
    this.dataService.registerDonor(data).subscribe((value)=>{
      console.log(value);  
    })
    this.profileForm.reset();
  }

}
