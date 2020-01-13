import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cursos } from '../cursos';


@Component({
  selector: 'ed-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.css']
})
export class CourseActionComponent implements OnInit {
  @Input ()
  curso: Cursos;
  @Output()
  edit: EventEmitter<Cursos> = new EventEmitter<Cursos>();
  
  @Output()
  delete: EventEmitter<Cursos> = new EventEmitter<Cursos>();



  constructor() { }

  ngOnInit() {
  }
  editarCurso(curso: Cursos){
    console.log('Edit', curso);
    //Propagando el objeto Curso hacia el componente padre
    this.edit.emit(curso);
  }
  eliminarCurso(curso: Cursos){
    console.log('Eliminar', curso);
    this.delete.emit(curso);
  }
  onMouseover(event: any){
    console.log('Mouse Over', event);
  }
  onDobleclick(event: any){
    console.log('Doble click', event);
  }
}
