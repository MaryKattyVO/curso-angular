import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Curso } from '../curso';
import { Cursos } from '../cursos';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { catchError, tap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';

@Component({
  selector: 'ed-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, AfterViewInit {
  titulo: string = 'Lista de Cursos!!';
  anchoImagen: string = '40px';
  @ViewChild('filtro',{static: false})
  filtro: ElementRef;
  private _textoFiltro: string = '';

  set textoFiltro (t: string){
    console.log('textoFiltro', t);
    this._textoFiltro = t;
    this.filtrarCursos(t);
    //this.cursos = t? this.filtrarCursos(t): this.cursosService.getCourses();
  }
  get textoFiltro() {
    return this._textoFiltro;
  }

  cursos: any[] ;
  cursosFiltrados: Curso[];
  mensajeError: string;
  constructor(private router: Router, private cursosService: CoursesService) { 
    
    //this.eliminarCursos();
  }

  ngOnInit() {
    //this.cursos = this.cursosService.getCourses();
    this.getCursos();
  }
  getCursos (){
    this.cursosService.getCursos()
    .pipe (
      //tap(cursos => console.log('Cursos', cursos)),
      catchError(error => {
        this.mensajeError =  error;
        return EMPTY;
      })
    )
    .subscribe((cursos: Curso[])=> {
      this.cursos = cursos
      this.cursosFiltrados = cursos;
    });
  }
  ngAfterViewInit(){
    //this.filtro.nativeElement.value = 'Angular';
  }
  filtrarCursos(texto: string){
    this.cursosFiltrados = this.cursos.filter(
      (curso: Curso) => curso.name.toLocaleLowerCase().indexOf(texto.toLocaleLowerCase()) >= 0);
  }
  eliminarCursos() {
    setTimeout(() => {
      this.cursos = [];
    }, 5000);
  }
  onEditCurso(curso: Cursos){
    console.log('[Courses] Edit', curso);
    this.router.navigate([`course/${curso.id}`]);
  }
  onDeleteCurso(curso: Cursos){
    console.log('[Courses] Delete', curso);
    this.cursos = this.cursos.filter((c: Cursos)=> {
      return c.id !== curso.id
    })
  }
}
