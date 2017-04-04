import { NgModule } from '@angular/core';

import { ContactsComponent } from './components/contacts.component';
import { CardComponent } from './components/card.component';
import { ContactsListComponent } from './components/contacts-list.component';

import { MenuModule } from '../menu/menu.module';

@NgModule({
    imports: [MenuModule],
    declarations: [
        ContactsComponent,
        CardComponent,
        ContactsListComponent
    ],
    exports: [ContactsComponent],
    providers: []
})

export class ContactsModule {
}