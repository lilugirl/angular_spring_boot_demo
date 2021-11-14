import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

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