import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRouterMoudle } from './app.routing';
// import { JobModule } from './jobs/job.module'
import { SharedModule } from './shared/shared.module';
// import { AboutusModule } from './aboutus/aboutus.module';
import { ContactusModule } from './contactus/contactus.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,

  ],
  imports: [
    BrowserModule,
    AppRouterMoudle,
    SharedModule, // no lazyloadmodule here
    ContactusModule,
    SlimLoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
