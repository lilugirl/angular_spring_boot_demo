import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagePicker } from './components/image-picker/image-picker.component';
import { MyMaterialModule } from '../material/material.module';


const MODULES=[
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MyMaterialModule
]

const COMPONENTS =[
  ImagePicker
];



@NgModule({
  declarations: COMPONENTS,
  imports: [...MODULES],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }