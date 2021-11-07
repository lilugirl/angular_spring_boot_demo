import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-model-diriven',
  templateUrl: './model-diriven.component.html',
  styleUrls: ['./model-diriven.component.scss']
})
export class ModelDirivenComponent implements OnInit {

  user=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    repeat:['',[Validators.required]],
    address:this.fb.group({
      province:[],
      city:[],
      area:[],
      addr:[]
    })
  },{validator:this.validateEqual('password','repeat')})

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
   
  }

  onSubmit({value,valid}:any){
        if(!valid) return;
        console.log(JSON.stringify(value))
  }


  validateEqual(passwordKey:string,confirmPasswordKey:string):ValidatorFn {
    // @ts-ignore
    return (group:FormGroup):{[key:string]:any} | null=>{
      const password=group.controls[passwordKey];
      const confirmPassword=group.controls[confirmPasswordKey];
      
      if(password.value!==confirmPassword.value){
                return {
                  validateEqual:true
                }
      }
      return null
    }
  }

  

}
