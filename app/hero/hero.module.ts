import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';


import { routing }              from './hero.routing';
import {HeroService} from "./hero.service";
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
@NgModule({
    imports:      [ CommonModule, FormsModule,routing  ],
    declarations: [ HeroesComponent,HeroDetailComponent],
    providers:    [ HeroService]
})
export class HeroModule { }