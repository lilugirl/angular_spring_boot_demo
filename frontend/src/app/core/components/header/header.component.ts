import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() title='企业协作平台';
  @Input() hideForGuest=false;
  @Output() toggleMenuEvent=new EventEmitter<void>();
  @Output() toggleDarkModeEvent=new EventEmitter<boolean>();
  @Output() logoutEvent=new EventEmitter();

  constructor() {
   
   }

  ngOnInit() {
  }

  toggleMenu(){
    this.toggleMenuEvent.emit();
  }

  handleLogout(){
    this.logoutEvent.emit();
  }

  toggleDarkMode(checked:boolean){
    this.toggleDarkModeEvent.emit(checked);
  }

}
