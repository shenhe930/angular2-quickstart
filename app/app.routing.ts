import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/contact',
        pathMatch: 'full'
    },

    {
        path: 'heroes',
        loadChildren: 'app/hero/hero.module#HeroModule'
    },

    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },

/*    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }*/

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);