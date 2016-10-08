import { NgModule }           from '@angular/core';
import { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { routing }              from './contact.routing';
import {SharedModule} from "../shared/shared.module";
@NgModule({
    imports:      [ SharedModule, routing  ],
    declarations: [ ContactComponent ],
    providers:    [ ContactService ]
})
export class ContactModule { }
