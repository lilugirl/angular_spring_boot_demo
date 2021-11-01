import { NgModule, Optional, SkipSelf } from '@angular/core';

export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule:CoreModule){
    if(parentModule){
      throw new Error('CoreModule 已经装载, 请仅在AppModule中引入该模块。');
    }
  }
}
