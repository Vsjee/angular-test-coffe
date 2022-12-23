import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxBootstrapIconsModule, github, linkedin } from 'ngx-bootstrap-icons';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';

const icons = {
  github,
  linkedin,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    FooterComponent,
    NgxBootstrapIconsModule.pick(icons),
    StoreModule.forRoot(ROOT_REDUCERS),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
