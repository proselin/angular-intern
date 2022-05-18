import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ManageQuestionComponent} from "./Component/manage-question/manage-question.component";


const routes: Routes = [
  { path: 'manage-quest', component: ManageQuestionComponent},
  { path: '**' , redirectTo: 'manage-quest'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export  class  AppRoutingModule{

}
