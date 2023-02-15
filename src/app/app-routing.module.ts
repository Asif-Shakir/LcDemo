import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationLayoutComponent } from './shared/layout/authentication-layout/authentication-layout.component';
import { RootLayoutComponent } from './shared/layout/root-layout/root-layout.component';


const routes: Routes = [
  {
    path: 'personal',
    component: RootLayoutComponent,
    loadChildren: () => import('./personal/personal.module').then(mod => mod.PersonalModule),
  },
  {
    path: 'account',
    component: AuthenticationLayoutComponent,
    loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
