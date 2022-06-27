import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudScreenComponent } from './screens/crud-screen/crud-screen.component';

const routes: Routes = [
  {path:'', redirectTo:'/crud', pathMatch:'full'},
  {path:'crud', component:CrudScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
