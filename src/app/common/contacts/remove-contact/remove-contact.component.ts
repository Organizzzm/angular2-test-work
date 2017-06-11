import { Component } from '@angular/core';

import { ContactsService } from '../contacts.service';
import { PopupService } from "../../../core/popup/popup.service";

@Component({
    selector: 'remove-contacts',
    templateUrl: './remove-contact.component.html'
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