import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  apiUrl: String = 'http://localhost:8524/api';
  
  getStudentlist(){
    return this.http.get(`${this.apiUrl}/studentlist`);
  }

  deleteStudent(id: any){
    return this.http.delete(`${this.apiUrl}/student/${id}`);
  }

  addStudent(data: any){
    return this.http.post(`${this.apiUrl}/student`,data);
  }

  updateStudent(data:any){
    return this.http.put(`${this.apiUrl}/student`,data);
  }

  getStudentDetail(id:any){
    return this.http.get(`${this.apiUrl}/student/${id}`);
  }
}
