import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { routing }              from './dashboard.routing';
import {HeroSearchComponent} from "./hero-search.component";
import {HeroSearchService} from "./hero-search.service";
import {DashboardComponent} from "./dashboard.component";
@NgModule({
    imports:      [ CommonModule, FormsModule,routing  ],
    declarations: [ DashboardComponent,HeroSearchComponent ],
    providers:    [ HeroSearchService ]
})
export class DashboardModule { }
