import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { IconType, MenuGroup } from 'src/app/domain/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   isCollapsed=true;
   sidebarMenu:MenuGroup[]=[];

   constructor(private oc:OverlayContainer){
     this.sidebarMenu=[{
       name:'项目列表',
       items:[
         {
           title:'项目一',
           subtitle:'项目一的描述',
           iconName:'project',
           iconType:IconType.SVG,
           emitData:'abc123',
           routerLink:['/projects/abc123']
         },
         {
          title:'项目二',
          subtitle:'项目二的描述',
          iconName:'home',
          iconType:IconType.MATERIAL_ICON,
          emitData:'abc234',
          routerLink:['/projects/abc234']
        },
        {
          title:'项目三',
          subtitle:'项目三的描述',
          iconName:'fa-bell',
          iconType:IconType.FONT_AWESOME,
          fontSet:'fontawesome',
          emitData:'abc345',
          routerLink:['/projects/abc345']
        }
       ]
     }]
   }

   toggleDarkMode(darkMode:boolean){
     console.log('this.oc',this.oc)
      if(darkMode){
        // 将定义的主题类应用到OverlayContainer
        this.oc.getContainerElement().classList.add('myapp-dark-theme');
      }else{
        // 将定义的主题类从OverlayContainer的风格中移除
        this.oc.getContainerElement().classList.remove('myapp-dark-theme');
      }
   }
}
