import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { MovieInfoComponentComponent } from './movie-info-component/movie-info-component.component';
import { MovieTitleComponent } from './movie-title/movie-title.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { DescriptionComponent } from './description/description.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    MovieInfoComponentComponent,
    MovieTitleComponent,
    MovieInfoComponent,
    DescriptionComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
