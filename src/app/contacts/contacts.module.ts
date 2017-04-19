import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './components/contacts.component';
import { CardComponent } from './components/card.component';
import { ContactsListComponent } from './components/contacts-list.component';
import { AddUserComponent } from './components/adduser.component';

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
        ContactsListComponent,
        AddUserComponent
    ],
    exports: [
        ContactsComponent,
        AddUserComponent
    ],
    providers: []
})

export class ContactsModule {
}