import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './components/contacts.component';
import { CardComponent } from './components/card.component';
import { ContactsListComponent } from './components/contacts-list.component';

import { ContactsService } from './services/contacts.service';
import { PopupService } from "../popup/popup.service";

import { MenuModule } from '../menu/menu.module';
@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        MenuModule
    ],
    declarations: [
        ContactsComponent,
        CardComponent,
        ContactsListComponent
    ],
    exports: [
        ContactsComponent
    ],
    providers: [
        ContactsService,
        PopupService
    ]
})

export class ContactsModule {
}