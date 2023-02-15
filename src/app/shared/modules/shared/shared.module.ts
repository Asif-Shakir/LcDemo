import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LeftMenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LeftMenuComponent,HeaderComponent]
})
export class SharedModule { }
