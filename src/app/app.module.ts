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
    GlitchDirective
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
