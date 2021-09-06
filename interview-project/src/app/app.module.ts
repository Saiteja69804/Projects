import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MiddleDivisionComponent } from './middle-division/middle-division.component';
import { BottomDivisionComponent } from './bottom-division/bottom-division.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiddleDivisionComponent,
    BottomDivisionComponent,
    CarouselCardComponent,
    SocialButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
