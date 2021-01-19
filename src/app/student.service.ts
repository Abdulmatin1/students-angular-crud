import { Students } from './students';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private backendapi = 'http://localhost:8090//students/v1/students';
  constructor(private httpClient: HttpClient) { }


getAllStudents(): Observable<Students[]>{

  return this.httpClient.get<Students[]>(`${this.backendapi}`);

}


addStudent(student: Students): Observable<Object>{

  return this.httpClient.post(`${this.backendapi}`, student);
}



  getStudentById(id: number): Observable<Students>{

      return this.httpClient.get<Students>(`${this.backendapi}/${id}`);
  }


upateStudent(id: number, student: Students): Observable<Object>{

  return this.httpClient.put(`${this.backendapi}/${id}`, student);
}




deleteStudent(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.backendapi}/${id}`);

}

}
