import { Component } from '@angular/core';

import { ContactsService } from '../services/contacts.service';
import { PopupService } from "../../popup/popup.service";

@Component({
    selector: 'remove-contacts',
    templateUrl: '../templates/remove-contact.component.html'
})

export class RemoveContactsComponent {
    constructor(private popupService: PopupService,
                private contactsService: ContactsService) {
    }

    closePopup() {
        this.popupService.close();
    }

    removeContacts() {
        this.contactsService.removeContacts();
        this.closePopup();
    }
}