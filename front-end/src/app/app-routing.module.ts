import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { ProfessorFormComponent } from './professor/professor-form/professor-form.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';

const routes: Routes = [
  { path: 'professor', component: ProfessorListComponent },
  { path: 'professor/novo', component: ProfessorFormComponent },
  { path: 'professor/:id', component: ProfessorFormComponent },

  { path: 'turma', component: TurmaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
