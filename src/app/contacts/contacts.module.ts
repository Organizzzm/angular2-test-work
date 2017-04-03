import { NgModule } from '@angular/core';

import { ContactsComponent } from './components/contacts.component';
import { CardComponent } from './components/card.component';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
    imports: [],
    declarations: [
        ContactsComponent,
        CardComponent,
        MenuComponent],
    exports: [],
    providers: []
})

export class ContactsModule {}