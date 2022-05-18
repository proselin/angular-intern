import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExamCategoryApiService} from "../../services/api/level-question";
import {questionLevelModel} from "../../models/response/level-question.model";
import {questionTypeModel} from "../../services/api/type-question";
import {GetSubOfCategoryModel} from "../../models/response/get-sub-of-category.model";


@Component({
  selector: 'app-manage-question',
  templateUrl: './manage-question.component.html',
  styleUrls: ['./manage-question.component.css']
})
export class ManageQuestionComponent implements OnInit {
  levelQuestion: questionLevelModel[]= [];
  typeQuestion: questionTypeModel[] = [];
  getSubCategory: GetSubOfCategoryModel[] = [];
  // products1: Product[];

  formQuestion = [
    // {name: "Một lựa chọn", value:1},
    // {name: "Nhiều lựa chọn" , value:2},
    // {name: "Fill in blank" , value:3},
    // {name: "Matching" , value: 4},
    // {name: "Tự luận", value: 5}
  ]

  status = [
    {name: "Hoạt động", value: 1},
    {name: "Không hoạt động", value: 0}
  ]

  selectedTypeQuestion: any;
  selectedLevelQuestion: any;
  products1: any;




  constructor(
    private http: HttpClient,
    private examCategoryApiService: ExamCategoryApiService,
  ) {
    this.getData()
  }

  ngOnInit(): void {
    this.getType()
    this.getSubOfCategory()
  }


  getData() {
    this.examCategoryApiService.getQuestionLevel().subscribe(
      (response) => {
        this.levelQuestion = response
        console.log(response)
      },
      () => {},
      () => {}
    )
  }

  getType(){
    this.examCategoryApiService.getQuestionType().subscribe(
      (res) => {
        this.typeQuestion = res
        console.log(res)
      },
      () => {},
      () => {}
    )
  }

  getSubOfCategory() {
    this.examCategoryApiService.getSearchInfo().subscribe(
      res => {
        console.log(res)
        this.products1 = res.data.results

      },
      () => {},
      () => {}
    )
  }

  checkVal($event: any) {
    console.log($event)
    console.log(this.selectedTypeQuestion)
  }
}
