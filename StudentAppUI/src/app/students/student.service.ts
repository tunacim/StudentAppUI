import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddStudentRequest } from '../Model/ApiModels/AddStudentRequest.Model';
import { Student } from '../Model/ApiModels/Student.Model';
import { updateStudentRequest } from '../Model/ApiModels/updateStudentRequest.Model';

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

  updateStudent(studentId:string|null,studenRequest:Student):Observable<Student>{
    const updateStudentRequest:updateStudentRequest={
      firstName:studenRequest.firstName,
      lastName:studenRequest.lastName,
      dateOfBirth:studenRequest.dateOfBirth,
      email:studenRequest.email,
      mobile:studenRequest.mobile,
      genderId:studenRequest.genderId,
      physicalAddress:studenRequest.adress.physicalAddress,
      postalAddress:studenRequest.adress.postalAddress


    }
    return this.httpClient.put<Student>(this.BaseApiUrl+'/Student/'+studentId,updateStudentRequest);
  }
  deleteStudent(studentId:string|null):Observable<Student>{


    return this.httpClient.delete<Student>(this.BaseApiUrl+'/Student/'+studentId);
  }
  addStudent(studenRequest:Student):Observable<Student>{
    const addStudentRequest:AddStudentRequest={
      firstName:studenRequest.firstName,
      lastName:studenRequest.lastName,
      dateOfBirth:studenRequest.dateOfBirth,
      email:studenRequest.email,
      mobile:studenRequest.mobile,
      genderId:studenRequest.genderId,
      physicalAddress:studenRequest.adress.physicalAddress,
      postalAddress:studenRequest.adress.postalAddress

  }
  return this.httpClient.post<Student>(this.BaseApiUrl+"/Student/Add",addStudentRequest);


}
}
