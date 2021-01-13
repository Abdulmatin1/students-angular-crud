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



  constructor(private stuService: StudentService, private rout: Router) { }

  ngOnInit(): void {
    this.getstudents();
  }


  private getstudents(){

      this.stuService.getAllStudents().subscribe( data =>{
          this.students = data;
      } )
  }


}
