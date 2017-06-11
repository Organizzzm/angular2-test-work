import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './contacts.component';
import { CardComponent } from './card/card.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

import { ContactsService } from './contacts.service';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule
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
        ContactsService
    ]
})

export class ContactsModule {}