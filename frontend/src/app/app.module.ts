import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './core/containers/app/app.component';
import {HeaderComponent} from './core/components/header/header.component'
// import { FormDemoModule } from './core/containers/template-driven/form-demo.module';
// import { ModelDirivenComponent } from './core/model-diriven/model-diriven.component';
import {SharedModule} from './shared/shared.module'
import {CoreModule} from './core/core.module'
import { FooterComponent } from './core/components/footer/footer.component';
import {SidebarComponent} from './core/components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent
    // ModelDirivenComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    // FormDemoModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
