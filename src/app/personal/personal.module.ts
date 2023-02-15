import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { RouterModule, Routes } from '@angular/router';
import { SortArrayPipe } from '../shared/pipes/sort-array.pipe';
import { OrderModule } from 'ngx-order-pipe';
const routes: Routes = [
  { path: 'mycards', component: MyCardsComponent },
]
@NgModule({
  declarations: [
    MyCardsComponent,
    SortArrayPipe,
  ],
  imports: [
    OrderModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class PersonalModule { }
