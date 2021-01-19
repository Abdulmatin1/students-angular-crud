import { StudentService } from './../student.service';
import { Students } from './../students';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students: Students[];
 searchkeyWord: '';


  constructor(private stuService: StudentService, private rout: Router) { }

  ngOnInit(): void {
    this.getstudents();
  }


  private getstudents(){

      this.stuService.getAllStudents().subscribe( data =>{
          this.students = data;
      } )
  }




  updateStudent(id: number){
    this.rout.navigate(['upadate',  id])

  }



  deleteStudent(id: number){
       this.stuService.deleteStudent(id).subscribe(data =>{
         console.log(data);
         this.getstudents();

       } )
  }




  detailStudent(id: number){
    this.rout.navigate(['detail', id])

  }

 
  p: number = 1;
  key: any = 'id'
  reverse: boolean = false;
  sortStudents(studentKey){

    this.key = studentKey;
    this.reverse = !this.reverse;
  }

 
  

}
