import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelNewComponent } from './components/level/level-new/level-new.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { LevelListComponent } from './components/level/level-list/level-list.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { PlanListComponent } from './components/plan/plan-list/plan-list.component';
import { AuthorityListComponent } from './components/authority/authority-list/authority-list.component';
import { ExerciseListComponent } from './components/exercise/exercise-list/exercise-list.component';
import { LessonListComponent } from './components/lesson/lesson-list/lesson-list.component';
import { ImageListComponent } from './components/image/image-list/image-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/add/add.component';
import { LogInComponent } from './components/user/log-in/log-in.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';
import { AppComponent } from './app.component';
import { StudentLessonComponent } from './components/student/student-lesson/student-lesson.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { QuestionToCompleteComponent } from './components/question/question-to-complete/question-to-complete.component';
import { QuestionToMarkComponent } from './components/question/question-to-mark/question-to-mark.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


const routes: Routes = [
  //{path:"", component:DashboardComponent, pathMatch: 'full'},
  {path:"", component:LandingPageComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"lista-autoridades", component:AuthorityListComponent},
  {path:"lista-ejercicios", component:ExerciseListComponent},
  {path:"lista-imagenes", component:ImageListComponent},
  {path:"lista-lecciones", component:LessonListComponent},
  {path:"lista-niveles", component:LevelListComponent},
  {path:"lista-planes", component:PlanListComponent},
  {path:"lista-estudiantes", component:StudentListComponent},
  {path:"lista-usuarios", component:UserListComponent},
  
  //{path:"nuevo-nivel", component: LevelNewComponent},
  {path:"nuevo-nivel", component: LevelListComponent},
  {path:"nueva-imagen", component: ImageListComponent},
  {path:"nuevo-ejercicio", component: ExerciseListComponent},
  {path:"nueva-leccion", component: LessonListComponent},

  {path:"editar-nivel/:codigo", component: LevelListComponent},
  {path:"editar-imagen/:codigo", component: ImageListComponent},
  {path:"editar-ejercicio/:codigo", component: ExerciseListComponent},
  {path:"editar-leccion/:codigo", component: LessonListComponent},
  
  //estudiante
  {path:"estudiante-perfil", component: StudentProfileComponent},
  {path:"estudiante-lecciones", component: StudentLessonComponent},
  {path:"login", component:LogInComponent},
  {path:"signup", component:SignUpComponent},

  //pregunta
  {path:"leccion/:codigo/ejercicio-completar", component: QuestionToCompleteComponent},
  {path:"leccion/:codigo/ejercicio-marcar", component: QuestionToMarkComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
