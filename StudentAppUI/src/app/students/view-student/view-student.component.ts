import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  studentId:string|null|undefined;
  constructor(private readonly studentService:StudentService,private readonly route:ActivatedRoute){}

  ngOnInit():void{
    this.route.paramMap.subscribe(
      (params)=>{
       this.studentId= params.get("id");
       this.studentService.getStudent(this.studentId).subscribe(
        (succes)=>{

          debugger;
        },
        (err)=>{}
      )
      }


    )
  }

}
