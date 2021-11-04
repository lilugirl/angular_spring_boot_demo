import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-model-diriven',
  templateUrl: './model-diriven.component.html',
  styleUrls: ['./model-diriven.component.scss']
})
export class ModelDirivenComponent implements OnInit {

  user:FormGroup=new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    // 初始化表单
    this.user=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.pattern(/()/)]),
      password:new FormControl('',[Validators.required]),
      repeat:new FormControl('',[Validators.required]),
      address:new FormGroup({
        province:new FormControl(''),
        city:new FormControl(''),
        area:new FormControl(''),
        addr:new FormControl()
      })
    })
  }

  onSubmit({value,valid}:any){
        if(!valid) return;
        console.log(JSON.stringify(value))
  }

  

}
