import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RepeatValidatorDirective } from "./repeat-validator-directive";
import { TemplateDrivenComponent } from "./template-driven.component";

@NgModule({
    declarations: [
        TemplateDrivenComponent,
        RepeatValidatorDirective
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