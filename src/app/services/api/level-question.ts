import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {QuestionSearch} from "./question.search";




@Injectable({
  providedIn: 'root',
})
export class ExamCategoryApiService {
  api = environment.api;

  constructor(private http: HttpClient) { }


  getQuestionLevel(): Observable<any> {
    return this.http.get(this.api + '/category/question/get-all-question-level' )
  }

  getQuestionType(): Observable<any> {
    return this.http.get(this.api+ '/category/question/get-all-question-type' )
  }

  getSearchInfo(): Observable<any> {
    return this.http.get(this.api + '/category/question/get-sub-of-category?page=0&size=10')
  }

  getSubOfCategory(searchModel: QuestionSearch) {
    const body = JSON.stringify(searchModel);
    let param = new HttpParams()
      .set('page', searchModel.page).set('size', searchModel.size);
    if(searchModel.categoryQuestionId != null) param.append('categoryQuestionId',searchModel.categoryQuestionId)
    if(searchModel.type != null) param = param.append('type', searchModel.type);
    if(searchModel.content != null) param = param.append('content', searchModel.content);
    if(searchModel.level != null) param = param.append('level', searchModel.level);
    if(searchModel.status != null) param = param.append('status', searchModel.status);
    if(searchModel.sortField != null) param = param.append('sortField', searchModel.sortField);
    if(searchModel.sortOder != null) param = param.append('sortOder', searchModel.sortOder);
    return this.http.get(this.api+'/category/question/get-sub-of-category',{params: param});
  }


  deleteQuestion(questionId: number): Observable<any> {
    return this.http.delete(this.api + '/category/question/' + questionId )
  }

  addProduct(data: any): Observable<any> {
    return this.http.post(this.api + '/category/question/', data )
  }

}
