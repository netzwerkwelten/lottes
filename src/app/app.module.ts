import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImprintComponent } from './imprint/imprint.component';
import {Router, RouterModule} from "@angular/router";
import {CustomHttp} from "./shared/interceptors/custom-http.interceptor";
import {HttpModule, Http, ConnectionBackend, BaseRequestOptions, XHRBackend, RequestOptions} from '@angular/http';
import {appRoutes} from "./app.routes";
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './root/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './root/footer/footer.component';
import { GlitchDirective } from './shared/animation/glitch.directive';
import { IntroComponent } from './root/intro/intro.component';
import { PhotosComponent } from './photos/photos.component';
import { CodeComponent } from './code/code.component';
import { WoodComponent } from './wood/wood.component';
import { Intro3dComponent } from './root/intro-3d/intro-3d.component';

export function customHttpLoaderFactory(backend: XHRBackend, options: RequestOptions,  router: Router) {
  options.withCredentials = true;
  options.headers.append('Content-Type', 'application/json;charset=UTF-8');
  options.headers.append('Accept', 'application/json;charset=UTF-8');
  options.headers.append('X-Requested-With', 'XMLHttpRequest');
  return new CustomHttp(backend, options, router);
}

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
    WoodComponent,
    Intro3dComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false }),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
