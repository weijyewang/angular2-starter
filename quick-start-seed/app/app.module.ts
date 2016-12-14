import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavBarComponent }  from './nav-bar/nav-bar.component';
import { LandingPagePanelComponent }  from './landing-page-panel/landing-page-panel.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPagePanelComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
