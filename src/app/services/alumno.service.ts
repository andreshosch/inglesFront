import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  listAlumnno='http://localhost:4000/alumnos/'

  constructor(private http:HttpClient) { }
  getStudent(): Observable<any> {
    return this.http.get(this.listAlumnno);
  }

  deleteStudent(id: string): Observable<any> {
     return this.http.delete(this.listAlumnno + id);
   
  }

  createStudent(alumno: Alumno): Observable<any> {
    return this.http.post(this.listAlumnno , alumno);
  }

  getStudentById(id: string): Observable<any> {
    return this.http.get(this.listAlumnno + id);
  }
   updateStudent(alumno: Alumno,id:string):Observable<any>{
     return this.http.put(this.listAlumnno+id,alumno)
   }
  
}

