import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './core/containers/app/app.component';
import { FormDemoModule } from './core/containers/template-driven/form-demo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
