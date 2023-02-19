import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  studentform: any = new FormGroup({
    'name': new FormControl('',[Validators.required]),
    'age': new FormControl('',[Validators.required]),
    'email':new FormControl('',[Validators.required]),
    'place':new FormControl('',[Validators.required]),
  })

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
  }

  sendStudent(){
    this.apiservice.addStudent(this.studentform.value).subscribe(res =>{
      alert('Data saved successfully');
      this.studentform.reset();
    })
  }

}
