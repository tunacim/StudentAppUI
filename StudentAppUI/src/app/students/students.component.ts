import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../Model/UıModels/Student.Model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

constructor(private studentService:StudentService){}
students:Student[]=[]
displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'mail','mobile','gender'];
datasource:MatTableDataSource<Student>=new MatTableDataSource<Student>();
ngOnInit(): void {
debugger;
  this.studentService.getStudents().subscribe(
    (succes)=>{
      this.students=succes
      this.datasource=new MatTableDataSource<Student>(this.students)

    },
    (err)=>{

    }
  )

}
}
