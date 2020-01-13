import { Injectable } from '@angular/core';
import {Curso} from './Curso';
import { COURSES } from './data/courses';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) {}

  //getCourses(): Curso[] {
  //  return COURSES;
  //}
  getCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>('assets/api/courses/courses.json')
    .pipe(
      catchError(this.manejarError)
    )
  }
  manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('Error de cliente',error.error.message);
    }else {
      //Error en el lado del servidor
      console.log('Error Status: ', error.status);
      console.log('Error', error.error);
    }
    return throwError('Hubo un problema al obtener los datos. Intente más tarde');
  }
}
