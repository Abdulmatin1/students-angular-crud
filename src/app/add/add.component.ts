import { Router } from '@angular/router';
import { Students } from './../students';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  student: Students = new Students();
  constructor(private stuService: StudentService, private myRout: Router) { }


  onSubmit(form: NgForm){
    console.log(this.student)
    this.addStudent();
    form.reset();


  }
  ngOnInit(): void {
  }



  addStudent(){
    this.stuService.addStudent(this.student).subscribe(data =>{
      console.log(data);
      this.gotoStudentListPage();
    })

  }



gotoStudentListPage(){
  this.myRout.navigate(['/list'])

}




}
