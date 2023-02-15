import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootLayoutComponent } from './shared/layout/root-layout/root-layout.component';
import { SharedModule } from './shared/modules/shared/shared.module';
import { AuthenticationLayoutComponent } from './shared/layout/authentication-layout/authentication-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    RootLayoutComponent,
    AuthenticationLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
