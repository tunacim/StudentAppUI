import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../Model/UıModels/Student.Model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator! : MatPaginator;

students:Student[]=[]
displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'mail','mobile','gender'];
datasource:MatTableDataSource<Student>=new MatTableDataSource<Student>();
filterString=""
constructor(private studentService:StudentService){}
ngOnInit(): void {
  this.studentService.getStudents().subscribe(
    (succes)=>{
      this.students=succes
      this.datasource=new MatTableDataSource<Student>(this.students)
      this.datasource.paginator=this.paginator
    },
    (err)=>{

    }
  )

}
filterStudents(){
  this.datasource.filter=this.filterString.trim().toLocaleLowerCase()
}
}
