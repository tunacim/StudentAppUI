import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/Model/UıModels/Student.Model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  studentId:string|null|undefined;
  student:Student={
    id:"",
    firstName:"",
    lastName:"",
    dateOfBirth:"",
    email:"",
    mobile:0,
    genderId:"",
    profileImageUrl:"",
    gender:{
      id:"",
      description:""
    },
    address:{
      id:"",
      physicalAddress:"",
      postalAddress:""
    }
  }
  constructor(private readonly studentService:StudentService,private readonly route:ActivatedRoute){}

  ngOnInit():void{
    this.route.paramMap.subscribe(
      (params)=>{
       this.studentId= params.get("id");
       this.studentService.getStudent(this.studentId).subscribe(
        (succes)=>{

          this.student=succes
        },
        (err)=>{}
      )
      }


    )
  }

}
