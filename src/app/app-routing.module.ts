import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {
    path:'', redirectTo:'manage', pathMatch:'full'
  },
  {
    path:'manage', component: ManageComponent
  },
  {
    path:'createUser', component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
