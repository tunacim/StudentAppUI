import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gender } from 'src/app/Model/UıModels/Gender.Model';
import { Student } from 'src/app/Model/UıModels/Student.Model';
import { GenderService } from '../services/gender.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  studentId:string|null|undefined;
  genderList:Gender[]=[]
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
    adress:{
      id:"",
      physicalAddress:"",
      postalAddress:""
    }
  }
  constructor(private readonly studentService:StudentService,private readonly route:ActivatedRoute,private readonly genderService:GenderService){}

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
      this.genderService.getGenderList().subscribe(
        (succes)=>{
          this.genderList=succes


        },
        (err)=>{}
      )
      }


    )
  }

}
