import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';

import { routing }              from './app.routing';
import './rxjs-extensions';

import {ContactModule} from "./contact/contact.module";
import {HeroModule} from "./hero/hero.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {CoreModule} from "./core/core.module";



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule.forRoot({userName: 'Miss Marple'}),
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing,
        ContactModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {


}
