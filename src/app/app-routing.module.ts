import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AutenticaGuard } from './guard/autentica.guard';

const routes: Routes = [
  //{  path:'home', component: HomeComponent  },
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AutenticaGuard]},
  {  path:'login', component: LoginComponent  },
  { path: '*', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
