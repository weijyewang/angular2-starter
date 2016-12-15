import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { AppComponent }               from './app.component';
import { NavBarComponent }            from './nav-bar/nav-bar.component';
import { FooterComponent }            from './footer/footer.component';
import { LandingPageComponent }       from './landing-page/landing-page.component';
import { LandingPagePanelComponent }  from './landing-page-panel/landing-page-panel.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LandingPageComponent,
    LandingPagePanelComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
