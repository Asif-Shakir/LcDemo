import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = {} as FormGroup;
  constructor(private fb:FormBuilder,private _httpService:HttpService) { }

  ngOnInit(): void {
    this.initLoginForm();
  }
  initLoginForm(){
    this.loginForm = this.fb.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }
  handleSubmit(){
    this._httpService.post('account/login',this.loginForm.value).subscribe(x=>{
      console.log(x);
    })
    console.log(this.loginForm.value);
  }
  get f(){
    return this.loginForm.controls;
  }
}
