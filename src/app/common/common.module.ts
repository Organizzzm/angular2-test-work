import { NgModule } from '@angular/core';
// import { BrowserModule, Title } from '@angular/platform-browser';
import { CommonComponent } from './common.component';
import { NavBarComponent } from '../navbar/navbar.component';
import { ClocksComponent } from '../clocks/clocks.component';

import { ContactsModule } from '../contacts/contacts.module';
import { GroupsModule } from '../groups/groups.module';

import { routing } from './common.routes';

// import {CommonModule}   from '@angular/common';

@NgModule({
    imports: [
        // CommonModule,
        routing,
        ContactsModule,
        GroupsModule
    ],
    declarations: [
        CommonComponent,
        NavBarComponent,
        ClocksComponent
    ],
    exports: [],
    providers: []
})

export class MainModule {
}