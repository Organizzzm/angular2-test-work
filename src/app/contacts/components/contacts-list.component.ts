import { Component } from '@angular/core';

import { ContactsListService } from '../services/contacts-list.service';
import { ContactsService } from '../services/contacts.service';
import { CardService } from '../services/card.service';

import { ContactItem } from '../interfaces/contacts';

@Component({
    selector: 'contacts-list',
    templateUrl: '../templates/contacts-list.component.html',
    styleUrls: ['../styles/contacts-list.component.scss']
})

export class ContactsListComponent {
    contactsList: ContactItem[] = [];
    countOfSelectItems: number = 0;

    constructor(private contactsListService: ContactsListService,
                private contactsService: ContactsService,
                private cardService: CardService) {
        this.contactsList = this.contactsListService.contacts;
    }

    tableClickHandler(value: ContactItem): void {
        value.select = !value.select;

        if (value.select) this.countOfSelectItems++;
        else this.countOfSelectItems--;

        if (this.countOfSelectItems == 0) this.cardService.clearCard();
        else this.cardService.setUserToCard(value);

        this.contactsService.checkCountOfItems(this.countOfSelectItems);

        console.log(value);
    }
}