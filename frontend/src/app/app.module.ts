import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './core/containers/app/app.component';
// import { ModelDirivenComponent } from './core/model-diriven/model-diriven.component';
import {CoreModule} from './core/core.module'

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
