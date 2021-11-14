import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { loadIconResources } from '../utils/icon';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppComponent } from './containers/app/app.component';

@NgModule({
  declarations:[
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports:[
    SharedModule,
    HttpClientModule, // 如果有mat-icon 或者 mat-icon-button 是必须要导入的
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule // material的动画必须导入这个模块
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
