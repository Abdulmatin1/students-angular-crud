import { ActivatedRoute } from '@angular/router';
import { StudentService } from './../student.service';
import { Students } from './../students';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  student: Students;
  id: number;
  constructor(private StuService: StudentService, private activaRout: ActivatedRoute) { }

  ngOnInit(): void {

       this.id = this.activaRout.snapshot.params['id']

      this.student = new Students();

      this.StuService.getStudentById(this.id).subscribe(data =>{
        this. student = data;
      })



  }

}
