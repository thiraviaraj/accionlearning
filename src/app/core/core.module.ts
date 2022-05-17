import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [
    TopBarComponent,
    PageNotFoundComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
