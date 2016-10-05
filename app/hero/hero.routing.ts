import { ModuleWithProviders }  from '@angular/core';
import { RouterModule } from '@angular/router';

import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
     path: 'detail/:id',
     component: HeroDetailComponent
     }
]);
