import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const MODULES=[
  CommonModule
]

const DECLARATIONS:any[] =[];
const EXPORT_COMPONENTS:any[] =[];
const ENTRYCOMPONENTS:any[] = [];


@NgModule({
  imports: MODULES,
  exports: [
    ...MODULES,
    ...EXPORT_COMPONENTS
  ],
  declarations: DECLARATIONS,
  entryComponents:[
    ENTRYCOMPONENTS
  ]

})
export class SharedModule { }
