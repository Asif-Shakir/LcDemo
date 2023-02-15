import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootLayoutComponent } from './shared/layout/root-layout/root-layout.component';


const routes: Routes = [
  {
    path: 'personal',
    component: RootLayoutComponent,
    loadChildren: () => import('./personal/personal.module').then(mod => mod.PersonalModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
