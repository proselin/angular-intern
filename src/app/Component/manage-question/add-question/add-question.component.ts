import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {questionLevelModel} from "../../../models/response/level-question.model";
import {questionTypeModel} from "../../../services/api/type-question";
import {EditorModule} from 'primeng/editor';
import {AccordionModule} from 'primeng/accordion';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
  providers:[FormBuilder]
})
export class AddQuestionComponent implements OnInit {
  product: any = {
    addCodeQuest: '',
    addContent: '',
    addStatus: ''
  }

  levelQuestion: questionLevelModel[]= [];
  typeQuestion: questionTypeModel[] = [];

  selectedLevelQuestion: any;
  selectedTypeQuestion: any;

  status: any;

  // @ts-ignore
  text1: string ;
  // @ts-ignore
  text2: string;
  constructor(
    private formBuider: FormBuilder,
    private router: Router,
              ) {

  }

  ngOnInit(): void {
  }

  checkVal($event: any) {
    // console.log(this.selectID)
    // console.log($event)
    // console.log(this.selectedTypeQuestion)
  }
}
