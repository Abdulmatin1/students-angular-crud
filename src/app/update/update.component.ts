import { Students } from './../students';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  student: Students = new Students();
  id: any;
  constructor(private stuService: StudentService, private myRout: Router, private activateRout: ActivatedRoute   ) { }


  onSubmit(){
    this.stuService.upateStudent(this.id, this.student).subscribe(data =>{
      this.gotoStudentlist();
    },
     error => console.log(error) );


  }
  gotoStudentlist() {
    this.myRout.navigate(['/list']);
  }





  ngOnInit(): void {
    this.id = this.activateRout.snapshot.params['id'];
    this.stuService.getStudentById(this.id).subscribe(data =>{
      this.student = data;
    },

    error => console.log(error));


  }









}
