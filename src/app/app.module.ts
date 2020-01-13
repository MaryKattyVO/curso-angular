import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
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
    CourseAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
