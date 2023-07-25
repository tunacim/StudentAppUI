import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
  isNewStudent=false;
  header="";


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
  constructor(private readonly studentService:StudentService,
    private readonly route:ActivatedRoute,
    private readonly genderService:GenderService,
    private readonly router:Router,
    private readonly snackBar:MatSnackBar){}

  ngOnInit():void{
    this.route.paramMap.subscribe(
      (params)=>{
       this.studentId= params.get("id");
       debugger
        if(this.studentId==null||this.studentId==undefined){
          this.isNewStudent=true;
          this.header="Öğrenci Ekle"
        }else{
          this.isNewStudent=false;
          this.header="Öğrenciyi Düzenle"
        }



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
  onUpdate():void{
    debugger
   this.studentService.updateStudent(this.student.id,this.student).subscribe(
     (succes)=>{
      this.snackBar.open("Öğrenci güncellendi !",undefined,{
        duration:3131
      })
      this.router.navigateByUrl("students")
     },
     (error)=>{
      this.snackBar.open("Bir hata oluştu güncellenemedi !",undefined,{
        duration:3131
      })


     }
   )
  }
  onDelete():void{
    this.studentService.deleteStudent(this.student.id).subscribe(
      (succes)=>{
        this.snackBar.open("Öğrenci silindi !",undefined,{
          duration:3131
        })
        this.router.navigateByUrl("students")
      },
      (error)=>{
        this.snackBar.open("Bir hata oluştu silinemedi !",undefined,{
          duration:3131
        })
      }
    )
  }

}
