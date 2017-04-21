import { Component } from '@angular/core';

import { Menu } from '../../menu/menu';

import { ContactsService } from '../services/contacts.service';

@Component({
    selector: 'contacts',
    templateUrl: '../templates/contacts.component.html',
    styleUrls: ['../styles/contacts.component.scss']
})

export class ContactsComponent {
    menu: Menu[] = [];

    constructor(private contactsService: ContactsService) {
        this.menu = this.contactsService.contactsMenu;
    }
}