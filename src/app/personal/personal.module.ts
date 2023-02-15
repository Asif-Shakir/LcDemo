import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'mycards', component: MyCardsComponent },
]
@NgModule({
  declarations: [
    MyCardsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class PersonalModule { }
