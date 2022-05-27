import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ManageQuestionComponent} from "./Component/manage-question/manage-question.component";
import {AddQuestionComponent} from "./Component/manage-question/add-question/add-question.component";
import {RegisterComponent} from "./Component/manage-question/register/register.component";
import {LoginComponent} from "./Component/manage-question/login/login.component";


const routes: Routes = [
  { path: 'manage-quest', component: ManageQuestionComponent},
  { path: 'add-quest', component: AddQuestionComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},

  { path: '**' , redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export  class  AppRoutingModule{

}
