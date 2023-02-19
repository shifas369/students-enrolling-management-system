import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }
   
  students: any =[];

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiservice.getStudentlist().subscribe( res => {
      console.log('incoming data');
      this.students = res;
    })
  }

  editStudent(id:any){
    this.router.navigate(['edit',id]);
  }

  deleteStudent(id:any){
      this.apiservice.deleteStudent(id).subscribe(res => {
      alert('Data deleted successfully');
      this.students = this.getData();      
    })

  }

}
