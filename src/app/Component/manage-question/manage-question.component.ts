import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExamCategoryApiService} from "../../services/api/type-question";
import {TypeQuestionModel} from "../../models/response/type-question.model";

@Component({
  selector: 'app-manage-question',
  templateUrl: './manage-question.component.html',
  styleUrls: ['./manage-question.component.css']
})
export class ManageQuestionComponent implements OnInit {
  typeQuestion: TypeQuestionModel[] = [];


  formQuestion = [
    {name: "Một lựa chọn"},
    {name: "Nhiều lựa chọn"},
    {name: "Fill in blank"},
    {name: "Matching"},
    {name: "Tự luận"}
  ]

  status = [
    {name: "Hoạt động", value: 1},
    {name: "Không hoạt động", value: 0}
  ]
  TypeQuestionModel: any;



  constructor(
    private http: HttpClient,
    private data: ExamCategoryApiService,
  ) {
    this.getData()
  }

  ngOnInit(): void {
    console.log('ok1')
  }


  getData() {
    console.log('oke3')
    this.data.getTypeQuestion().subscribe(
      (response) => {
        this.typeQuestion = response
        console.log(response)
      },
      () => {},
      () => {}
    )
  }
}
