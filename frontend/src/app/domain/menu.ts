export enum IconType{
    MATERIAL_ICON,
    FONT_AWESOME,
    SVG
 }
 
 export interface MenuItem{
   routerLink:string[],
   iconName:string;
   iconType:IconType,
   fontSet?:string;
   title:string;
   subtitle:string;
   emitData:any;
 }
 
 export interface MenuGroup{
   name:string;
   items:MenuItem[];
 }
 