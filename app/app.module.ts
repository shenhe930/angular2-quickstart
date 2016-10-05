import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';

import { routing }              from './app.routing';
import './rxjs-extensions';
import {HighlightDirective} from "./highlight.directive";
import {TitleComponent} from "./title.component";
import {UserService} from "./user.service";

import {ContactModule} from "./contact/contact.module";
import {HeroModule} from "./hero/hero.module";
import {DashboardModule} from "./dashboard/dashboard.module";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing,
        ContactModule,
        HeroModule,
        DashboardModule
    ],
    declarations: [
        AppComponent,
        HighlightDirective,
        TitleComponent,
    ],
    providers: [
        UserService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
