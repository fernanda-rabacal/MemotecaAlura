import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/thoughts/list-thought/list-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-pensamento',
    pathMatch: 'full'
  },
  {
    path: "criar-pensamento",
    component: CreateThoughtComponent
  },
  {
    path: "listar-pensamento",
    component: ListThoughtComponent
  },
  {
    path: "pensamentos/excluir-pensamento/:id",
    component: DeleteThoughtComponent
  },
  {
    path: "pensamentos/editar-pensamento/:id",
    component: EditThoughtComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
