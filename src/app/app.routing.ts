import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NutritionComponent } from './nutrition/nutrition.component';

const appRoutes: Routes = [

   { path: 'home', component: HomeComponent},
   { path: 'nutrition', component: NutritionComponent},
   { path: '**', component: LoginComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
