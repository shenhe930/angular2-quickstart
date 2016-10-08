import { NgModule }           from '@angular/core';

import { routing }              from './dashboard.routing';
import {HeroSearchComponent} from "./hero-search.component";
import {HeroSearchService} from "./hero-search.service";
import {DashboardComponent} from "./dashboard.component";
import {SharedModule} from "../shared/shared.module";
@NgModule({
    imports:      [ SharedModule,routing  ],
    declarations: [ DashboardComponent,HeroSearchComponent ],
    providers:    [ HeroSearchService ]
})
export class DashboardModule { }
