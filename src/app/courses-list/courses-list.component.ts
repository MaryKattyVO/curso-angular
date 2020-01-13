import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Curso } from '../curso';
import { Cursos } from '../cursos';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';

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
    //this.cursos = t? this.filtrarCursos(t): this.cursosService.getCourses();
  }
  get textoFiltro() {
    return this._textoFiltro;
  }

  cursos: any[] ;
  constructor(private router: Router, private cursosService: CoursesService) { 
    
    //this.eliminarCursos();
  }

  ngOnInit() {
    //this.cursos = this.cursosService.getCourses();
    this.cursosService.getCursos()
    .subscribe((cursos: Curso[])=> this.cursos = cursos);
  }
  ngAfterViewInit(){
    //this.filtro.nativeElement.value = 'Angular';
  }
  filtrarCursos(texto: string){
    return this.cursos.filter((curso: Curso)=> curso.name.toLocaleLowerCase().indexOf(texto.toLocaleLowerCase()) >=0);
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
