import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TemplateDrivenComponent } from "./template-driven.component";

@NgModule({
    declarations: [
        TemplateDrivenComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        TemplateDrivenComponent
    ]
    })
export class FormDemoModule {

}