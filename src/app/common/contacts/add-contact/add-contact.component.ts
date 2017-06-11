import { Component } from '@angular/core';

import { ContactItem } from '../interfaces/contacts';

import { ContactsService } from '../contacts.service';
import { PopupService } from '../../../core/popup/popup.service';

@Component({
    selector: 'add-user',
    templateUrl: './add-contact.component.html',
    styleUrls: ['../card/card.component.scss']
})

export class AddUserComponent {
    constructor(private popupService: PopupService,
                private contactsService: ContactsService) {}

    addUser(value: ContactItem) {
        this.contactsService.addContact(value);
        this.popupService.close();
    }
}