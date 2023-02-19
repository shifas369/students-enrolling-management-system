import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  id:any;
  studentform: any = new FormGroup({
    'name': new FormControl('',[Validators.required]),
    'age': new FormControl('',[Validators.required]),
    'email':new FormControl('',[Validators.required]),
    'place':new FormControl('',[Validators.required]),
    '_id': new FormControl('')
    
  })

  constructor(private apiservice: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => this.id =  params['id']);
    this.getData(this.id);
  }

  getData(id:any){
    this.apiservice.getStudentDetail(id).subscribe(res => {
      this.studentform.patchValue(res);      
    })
  }

  editStudent(){
    this.apiservice.updateStudent(this.studentform.value).subscribe(res =>{
      //alert('Updated successfully');
      //this.editStudent = () => {
                const response = confirm("Are you sure you want to do that?");

                if (response) {
                    alert("Ok was pressed");
                } else {
                    alert("Cancel was pressed");
                
            }
    })
  }

}
