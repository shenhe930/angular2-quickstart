import { NgModule }           from '@angular/core';

import { routing }              from './hero.routing';
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {SharedModule} from "../shared/shared.module";
@NgModule({
    imports:      [ SharedModule,routing  ],
    declarations: [ HeroesComponent,HeroDetailComponent],
})
export class HeroModule { }