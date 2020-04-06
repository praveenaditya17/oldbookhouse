import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { ProducthomeComponent } from './producthome/producthome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainsliderComponent,
    ProducthomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
