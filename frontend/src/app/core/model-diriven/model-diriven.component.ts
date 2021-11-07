import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-model-diriven',
  templateUrl: './model-diriven.component.html',
  styleUrls: ['./model-diriven.component.scss']
})
export class ModelDirivenComponent implements OnInit {

  result=''

  user=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    repeat:['',[Validators.required]],
    addrs:this.fb.array([
  
    ]) 
  },{validator:this.validateEqual('password','repeat')})

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  
   
  }

  private createAddrItem():FormGroup{
    return this.fb.group({
      province:[],
      city:[],
      area:[],
      street:[]
    })
  }

  addAddr(){
   (<FormArray>this.user.controls['addrs']).push(this.createAddrItem())
  
  }

  addrsControls(){
    return (<FormArray>this.user.controls['addrs']).controls
  }

  onSubmit({value,valid}:any){
        this.result=''
        if(!valid) return;
        console.log(JSON.stringify(value))
        this.result=JSON.stringify(value)
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
