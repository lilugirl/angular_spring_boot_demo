import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconType, MenuGroup } from 'src/app/domain/menu';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() menuGroups:MenuGroup[]=[]
  @Output() menuClickEvent=new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  menuClick(data:any){
    if(data){
      this.menuClickEvent.emit(data)
    }else{
      this.menuClickEvent.emit();
    }
  }

  // 前面的get 关键字表示这个方法是一个属性方法，可以当成属性使用
  get iconType(){
    return IconType
  }

}
