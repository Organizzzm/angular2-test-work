import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { CommonComponent } from './common.component';
import { NavBarComponent } from '../navbar/navbar.component';
import { ClocksComponent } from '../clocks/clocks.component';

import { ContactsModule } from '../contacts/contacts.module';
import { GroupsModule } from '../groups/groups.module';
import { PopupModule } from '../popup/popup.module';

import { routing } from './common.routes';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        ContactsModule,
        GroupsModule,
        PopupModule
    ],
    declarations: [
        CommonComponent,
        NavBarComponent,
        ClocksComponent
    ],
    exports: [],
    providers: []
})

export class CommonModule {
}