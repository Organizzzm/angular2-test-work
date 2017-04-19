import { Component, OnInit } from '@angular/core';

import { ContactsListService } from '../services/contacts-list.service';

import { ContactItem } from '../interfaces/contacts';

@Component({
    selector: 'contacts-list',
    templateUrl: '../templates/contacts-list.component.html',
    providers: [ContactsListService]
})

export class ContactsListComponent implements OnInit {
    contactsList: ContactItem[] = [];

    constructor(private contactsListService: ContactsListService) {}

    ngOnInit(): void {
        this.contactsList = this.contactsListService.getContacts();
    }
}