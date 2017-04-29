import { Component } from '@angular/core';

import { ContactItem } from '../interfaces/contacts';

import { ContactsService } from '../services/contacts.service';
import { PopupService } from '../../popup/popup.service';

@Component({
    selector: 'add-user',
    templateUrl: '../templates/adduser.component.html',
    styleUrls: ['../styles/card.component.scss']
})

export class AddUserComponent {
    constructor(private popupService: PopupService,
                private contactsService: ContactsService) {}

    addUser(value: ContactItem) {
        this.contactsService.addContact(value);
        this.popupService.close();
    }
}