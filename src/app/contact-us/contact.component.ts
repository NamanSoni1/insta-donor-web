import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // constructor(private dataService:DataService){}

  // alertForm = new FormGroup({
  //   name: new FormControl(''),
  //   number: new FormControl(''),
  //   address: new FormControl(''),
  //   bloodGroup: new FormControl(''),
  //   unit: new FormControl('')
  // });

  // onSubmit(data:any){
  //   this.dataService.requestBlood(data).subscribe((value)=>{
  //     console.log(value);
  //   })
  //   this.alertForm.reset();
  // }
}
