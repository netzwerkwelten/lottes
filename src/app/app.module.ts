import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ImprintComponent} from './imprint/imprint.component';
import {Router, RouterModule} from '@angular/router';
import {HttpModule, Http, ConnectionBackend, BaseRequestOptions, XHRBackend, RequestOptions} from '@angular/http';
import {appRoutes} from './app.routes';
import {HomeComponent} from './home/home.component';
import {RootComponent} from './root/root.component';
import {HeaderComponent} from './root/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './root/footer/footer.component';
import {GlitchDirective} from './shared/animation/glitch.directive';
import {IntroComponent} from './root/intro/intro.component';
import {PhotosComponent} from './photos/photos.component';
import {CodeComponent} from './code/code.component';
import {WoodComponent} from './wood/wood.component';

@NgModule({
  declarations: [
    AppComponent,
    ImprintComponent,
    HomeComponent,
    RootComponent,
    HeaderComponent,
    FooterComponent,
    GlitchDirective,
    IntroComponent,
    PhotosComponent,
    CodeComponent,
    WoodComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: false}),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
