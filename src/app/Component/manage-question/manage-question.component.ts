import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExamCategoryApiService} from "../../services/api/level-question";
import {questionLevelModel} from "../../models/response/level-question.model";
import {questionTypeModel} from "../../services/api/type-question";
import {GetSubOfCategoryModel} from "../../models/response/get-sub-of-category.model";
import {MenuItem} from "primeng/api";
import {QuestionSearch} from "../../services/api/question.search";
import {Router} from "@angular/router";
import {Constant} from "../../utils/constant";
import {ValueUtils} from "../../utils/value.utils";
import {$e} from "@angular/compiler/src/chars";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-manage-question',
  templateUrl: './manage-question.component.html',
  styleUrls: ['./manage-question.component.css'],
  providers:[FormBuilder]
})
export class ManageQuestionComponent implements OnInit {

  levelQuestion: questionLevelModel[]= [];
  typeQuestion: questionTypeModel[] = [];
  // @ts-ignore
  questionSlected: GetSubOfCategoryModel = {};
  getSubCategory: GetSubOfCategoryModel[] = [];
  // products1: Product[];
  // @ts-ignore
  questionSearch: QuestionSearch = {}
  page: number = 0
  size: number = 20



  status = [
    {name: "Hoạt động", value: 1},
    {name: "Không hoạt động", value: 0}
  ]

  allStatus = [
    {name: "Tất cả"},
    {name: "Hoạt động"},
    {name: "Không hoạt động"}
  ]


  operation = [
    // @ts-ignore
    {label: "Sao chép câu hỏi",
      command: ()=> {}
    },
    {label: "Sửa thông tin",

    },
    {label: "Xóa thông tin" ,
      command: () => {
          // this.deleteItem(e)
          // console.log(e)
        this.deleteQuestion()
        console.log("hung ok")
        this.listrequest = [this.getSubCategory]

      }
    },
    {label: "Chuyển sang hoạt động"},
    {label: "Chuyển sang không hoạt động"}
  ]

  loading: boolean = false;

  selectQrCode: string = '';
  selectQuestLevel: string = '';


  selectedTypeQuestion: any;
  selectedLevelQuestion: any;
  products1: any;
  selectID: any
  listrequest : any  = []





  constructor(
    private http: HttpClient,
    private examCategoryApiService: ExamCategoryApiService,
    private route: Router
  ) {
    this.questionSearch.page= this.page
    this.questionSearch.size = this.size
    this.getData()
  }

  ngOnInit(): void {
    this.getType()
    this.getSubOfCategory()
    this.onSearch()
  }

  product: any = {
    addCodeQuest: '',
    addContent: '',
    addStatus: ''
  }

  addpage() {
    this.route.navigateByUrl('/add-quest')
  }

  editForm() {

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

  resetData() {
    this.loading = true

    this.selectQrCode = <any>null


  }

  // deleteItem(id: number) {
  //
  //   this.examCategoryApiService.deleteQuestion(this.getSubCategory.questionId).subscribe(
  //     (res) => {
  //       // console.log(res)
  //     },
  //     () => {},
  //     () => {}
  //   )
  // }

  onSearch() {
    this.loading = true;

    this.examCategoryApiService.getSubOfCategory(this.questionSearch).subscribe(
      (response) => {
        // @ts-ignore
        this.getSubCategory = response.data.results;
        for(let question of this.getSubCategory) {
          // @ts-ignore
          question.content = this.handleAnswer(question.answer, question.answerCorrect, question.codeType, question.content);
        }
        // this.totalElements = response.data
      },
      () => {},
      () => {}
    )
  }

  // @ts-ignore
  handleAnswer(answer: any, answerCorrect: any, codeType: any, content: any): string {
    if(codeType == Constant.ONE_CHOICE) {
      let listAns = ValueUtils.stringToJson(answer);
      let ansCorrect = ValueUtils.stringToJson(answerCorrect)[0];
      let showData = '<p>' +content+ '</p>'
      let i = 0;
      for(let ans of listAns) {
        if(ansCorrect == i) {
          showData += '<li class="red-color" >' +ans+ '</li>'
        }
        else  showData += '<li>' +ans+ '</li>'
        i++;
      }
      return showData
    }
    else if(codeType == Constant.MULTI_CHOICE) {
      let listAns = ValueUtils.stringToJson(answer);
      let listAnsCorrect = ValueUtils.stringToJson(answerCorrect);
      let showData = '<p>' +content+ '</p>'
      let  i =0;
      for(let  ans of  listAns){
        if(listAnsCorrect.indexOf(i) >= 0){
          showData += '<li class="red-color" >' +ans+ '</li>'
        }else showData += '<li>' +ans+ '</li>'
        i++;
      }
      return  showData
    }

    else if(codeType == content.FILL_BLANK){
      let listAnsCorrect = ValueUtils.stringToJson(answerCorrect);
      let showData = '<p>' +content+ '</p>'
      let i = 0;
      for (let ans of listAnsCorrect) {
        showData += '<li>' +'Chỗ trống thứ '+i+' : +' +ans+  '</li>'
        i++;
      }
      return showData
    }
    else if(codeType == Constant.MATCHING) {
      let listAns = ValueUtils.stringToJson(answer);
      let listAnsLeft = listAns.left;
      let listAnsRight = listAns.right;
      let listAnsCorrect = ValueUtils.stringToJson(answerCorrect);

      let showData = '<p>'+content+'</p>'
      for(let i = 0; i < listAnsLeft.length;i++) {
        showData+='<div class="show-ans-table">'
        showData+='<div class="left-ans" style="width: 120px">'+listAnsLeft[i]+'</div>'
        showData+='<div style="width:20px">'+'----'+'</div>'
        showData+='<div class="right-ans" style="width: 120px">'+listAnsRight[listAnsCorrect[i]-1]+'</div>'
        showData+='</div>'
      }
      return showData;
    }else if(codeType == Constant.ESSAY) {
      let showData = '<p>'+content+'</p>'
      return showData;
    }

    return  'Chưa thêm câu hỏi'

  }



  checkVal($event: any) {
    console.log(this.selectID)
    console.log($event)
    console.log(this.selectedTypeQuestion)
  }

  addProduct() {
    this.examCategoryApiService.addProduct(this.product).subscribe(data => {alert('Thêm thành công')})
    // console.log(this.product)
  }

  deleteQuestion() {
    this.examCategoryApiService.deleteQuestion(this.questionSlected.questionId).subscribe(
        response => {
          console.log('Xóa thành công') ;
        },
        () => {},
      () => {}
    )
  }
}
