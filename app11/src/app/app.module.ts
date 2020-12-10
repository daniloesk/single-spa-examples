import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AssetUrlPipe } from '../single-spa/asset-url-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetUrlPipe,
    EmptyRouteComponent,
    HelloComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
