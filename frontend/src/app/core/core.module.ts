import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from '../material/material.module';
import { AppRoutingModule } from './app-routing.module';

export const loadIconResources=(ir:MatIconRegistry,ds:DomSanitizer)=>{
  const imgDir='assets/img';
  const avatarDir=`${imgDir}/avatar`;
  const sidebarDir=`${imgDir}/sidebar`;
  const iconDir=`${imgDir}/icons`;
  const dayDir=`${imgDir}/days`;
  ir
   .addSvgIconSetInNamespace('avatars',ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`))
   .addSvgIcon('unassigned',ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`))
   .addSvgIcon('project',ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`))
   .addSvgIcon('projects',ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`))
   .addSvgIcon('month',ds.bypassSecurityTrustResourceUrl(`${dayDir}/month.svg`))
   .addSvgIcon('week',ds.bypassSecurityTrustResourceUrl(`${dayDir}/week.svg`))
   .addSvgIcon('day',ds.bypassSecurityTrustResourceUrl(`${dayDir}/day.svg`))
   .addSvgIcon('move',ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`))
   .registerFontClassAlias('fontawesome','fa');

}

@NgModule({
  imports:[
    CommonModule,
    MyMaterialModule,
    HttpClientModule, // 如果有mat-icon 或者 mat-icon-button 是必须要导入的
    BrowserAnimationsModule, // material的动画必须导入这个模块
    AppRoutingModule
  ],
  exports:[
    MyMaterialModule,
    AppRoutingModule
  ]
})

export class CoreModule { 
  constructor(
    @Optional() 
    @SkipSelf() 
    parentModule:CoreModule,
    ir:MatIconRegistry,
    ds:DomSanitizer
    ){
    if(parentModule){
      throw new Error('CoreModule 已经装载, 请仅在AppModule中引入该模块。');
    }
    // 加载刚刚创建的工具函数
    loadIconResources(ir,ds)
  }
}
