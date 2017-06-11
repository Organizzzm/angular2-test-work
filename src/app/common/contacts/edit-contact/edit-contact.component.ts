import { Component, OnInit } from '@angular/core';

import { ContactItem } from '../interfaces/contacts';

import { ContactsService } from '../contacts.service';
import { PopupService } from "../../../core/popup/popup.service";

@Component({
    selector: 'edit-contacts',
    templateUrl: './edit-contact.component.html'
})

export class EditContactsComponent implements OnInit {
    private oldContact: ContactItem;
    public currentContact: ContactItem;

    constructor(private popupService: PopupService,
                private contactsService: ContactsService) {
    }

    saveContact(contact: ContactItem) {
        this.contactsService.updateContact(contact, this.oldContact);
        this.closePopup();
    }

    closePopup() {
        this.popupService.close();
    }

    ngOnInit() {
        this.oldContact = this.contactsService.contacts.filter(contact => {
            return contact.select;
        })[0];

        this.currentContact = this.oldContact;
    }
}