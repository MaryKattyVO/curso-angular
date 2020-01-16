import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltroPipe } from './filtro.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseActionComponent } from './course-action/course-action.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { from } from 'rxjs';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseAddReactiveComponent } from './course-add-reactive/course-add-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltroPipe,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    CoursesListComponent,
    CourseActionComponent,
    CourseEditComponent,
    CourseAddComponent,
    CourseAddReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
