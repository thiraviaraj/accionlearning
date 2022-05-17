import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FistPageComponent } from './containers/fist-page/fist-page.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { SideNavComponent } from './core/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { SharedService } from './core/shared.service';
import { ExponentialStrengthPipe } from './common/exponential-strength.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FistPageComponent,
    TopBarComponent,
    SideNavComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
