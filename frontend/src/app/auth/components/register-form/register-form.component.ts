import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @Input() title="注册"
  @Input() subtitle="注册成为会员体验全部功能"
  @Input() loginBtnText='已经注册? 点击登录';
  @Input() forgotBtnText='忘记密码?';

  form:FormGroup=new FormGroup({});


  constructor() { }

  ngOnInit() {
  }

  get usernameErrors(){
    return ''
  }

  get mobileErrors(){
    return ''
  }

  get emailErrors(){
    return ''
  }

  get nameErrors(){
    return ''
  }

  get passwordErrors(){
    return ''
  }

  get repeatErrors(){
    return ''
  }

  submit({value,valid}:FormGroup,ev:Event){

  }

}
