import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [

   { path: 'home', component: HomeComponent},
   { path: '**', component: LoginComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
