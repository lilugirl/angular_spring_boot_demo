import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss']
})
export class ImagePicker implements ControlValueAccessor {

  constructor() { }

  private propagateChange = (_: any) => {};

  public writeValue(obj:any){

  }

  public registerOnChange(fn:any){}

  public validate(c:FormControl){
    
  }

  public registerOnTouched(){}

  ngOnInit(): void {
  }

}
