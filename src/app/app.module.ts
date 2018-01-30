//ng g m app-routing--flat --module=app
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { GitHubDataService } from './services/git-hub-data.service';
import { AlertComponent } from './components/alert/alert.component';
import { AppRoutingModule } from './/app-routing.module';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
      SearchUserComponent,
      AlertComponent,
      InfoComponent,
      HomeComponent,
      AboutComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule
  ],
  providers: [GitHubDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
