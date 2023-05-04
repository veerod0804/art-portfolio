import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GlassComponent } from './pages/glass/glass.component';
import { SculptureComponent } from './pages/sculpture/sculpture.component';
import { PrintsComponent } from './pages/prints/prints.component';
import { DrawingsComponent } from './pages/drawings/drawings.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GlassComponent,
    SculptureComponent,
    PrintsComponent,
    DrawingsComponent,
    ContactMeComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
