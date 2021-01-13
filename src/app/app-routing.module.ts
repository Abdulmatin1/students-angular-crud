import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'upadate/id', component: UpdateComponent},
  {path: 'detail/id', component: DetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
