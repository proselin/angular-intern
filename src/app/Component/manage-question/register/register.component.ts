import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import {CustomvalidationService} from "../../../services/customvalidation.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // registerForm: FormGroup;
  submitted = false;
  registerForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private customValidator: CustomvalidationService
  ) { }

  ngOnInit(): void {
    // validation

    this.registerForm = this.formBuilder.group({
      firstName:   ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      userName: ['',Validators.required],
      passWord: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],

    //  login
      username: ['', Validators.required],


    })
  }

  onSubmit() {
    this.submitted = true

      if(this.registerForm.invalid) {

        return
        alert('Form error')
      }
    alert('Success')
  }
}
