import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ManageQuestionComponent } from './Component/manage-question/manage-question.component';
import {AppRoutingModule} from "./app-routing.module";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./services/auth.interceptor";
import {FormsModule} from "@angular/forms";
import {SplitButtonModule} from "primeng/splitbutton";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {AddQuestionComponent} from "./Component/manage-question/add-question/add-question.component";
import {DividerModule} from "primeng/divider";
import { EditQuestionComponent } from './Component/manage-question/edit-question/edit-question.component';
import {CalendarModule} from "primeng/calendar";
import {EditorModule} from "primeng/editor";
import {AutoCompleteModule} from "primeng/autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    ManageQuestionComponent,
    AddQuestionComponent,
    EditQuestionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    DropdownModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    SplitButtonModule,
    Ng2SearchPipeModule,
    DividerModule,
    CalendarModule,
    EditorModule,
    AutoCompleteModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
