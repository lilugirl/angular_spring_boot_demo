import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  user:User={
    email:'lilugirl2005@126.com',
    password:'',
    repeat:'',
    address:{
      province:'',
      city:'',
      area:'',
      addr:''
    }
  }

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  onSubmit({value,valid}:any,event:Event){
     if(valid){
       console.log('value',value)
     }
      event.preventDefault()
  }


}
