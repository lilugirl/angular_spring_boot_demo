import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './core/containers/app/app.component';
import { FormDemoModule } from './core/containers/template-driven/form-demo.module';
import { ModelDirivenComponent } from './core/model-diriven/model-diriven.component';


@NgModule({
  declarations: [
    AppComponent,
    ModelDirivenComponent
  ],
  imports: [
    BrowserModule,
    FormDemoModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
