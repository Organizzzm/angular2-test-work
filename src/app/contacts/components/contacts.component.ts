import { Component } from '@angular/core';

import { Menu } from '../../menu/menu';

import { ContactsListService } from '../services/contacts-list.service';

@Component({
    selector: 'contacts',
    templateUrl: '../templates/contacts.component.html',
    styleUrls: ['../styles/contacts.component.scss'],
    providers: [ContactsListService]
})

export class ContactsComponent {
    menu: Menu[] = [
        { name: 'Create', active: '', link: 'create' },
        { name: 'Edit', active: 'disabled', link: '' },
        { name: 'Delete', active: 'disabled', link: '' },
        { name: 'Select', active: '', link: '' },
    ];

    constructor(private contactsListService: ContactsListService) {
    }

    createContact(): void {
        console.log('Create!');
    }
}