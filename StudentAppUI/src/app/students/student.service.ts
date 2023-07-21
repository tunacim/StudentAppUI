import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Model/ApiModels/Student.Model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private BaseApiUrl='https://localhost:7167';
  constructor(private httpClient:HttpClient) { }

  getStudents():Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.BaseApiUrl+'/Student');
  }

  getStudent(studentId:string|null):Observable<Student>{
    return this.httpClient.get<Student>(this.BaseApiUrl+'/Student/'+studentId);
  }

}
