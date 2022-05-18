import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class ExamCategoryApiService {
  api = environment.api;

  constructor(private http: HttpClient) { }


  getTypeQuestion(): Observable<any> {
    return this.http.get(this.api + '/category/question/get-all-question-level' )
  }

}
