import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/domain/user';
import { usernamePattern } from 'src/app/utils/regex';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form:FormGroup=new FormGroup({});
  @Input() title='登录';
  @Input() subtitle='使用您的用户名密码登录';
  @Input() regButText='还没有注册?';
  @Input() forgotBtnText='忘记密码?';
  @Output() submitEvent=new EventEmitter<Auth>();

  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
    this.form=this.fb.group({
      login:[
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(usernamePattern)
        ])
      ],
      password:[
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50)
      ])]
    })
  }

  submit({value,valid}:FormGroup,ev:Event){
     if(!valid){
       return;
     }
     this.submitEvent.emit(value);
     
  }

}
