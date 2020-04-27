import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { CluesComponent } from './clues/clues.component';
import { PoemComponent } from './poem/poem.component';
import { HeaderComponent } from './header/header.component';
import { FooterButtonsComponent } from './footer-buttons/footer-buttons.component';
import { AboutAndCreditsComponent } from './about-and-credits/about-and-credits.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CluesComponent,
    PoemComponent,
    HeaderComponent,
    FooterButtonsComponent,
    AboutAndCreditsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
