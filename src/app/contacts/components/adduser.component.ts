import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ContactsListService } from '../services/contacts-list.service';

@Component({
    selector: 'add-user',
    templateUrl: '../templates/adduser.component.html',
    styleUrls: ['../styles/card.component.scss']
})

export class AddUserComponent {
    constructor(private contactsListService: ContactsListService, private router: Router){}

    addUser(value: any) {
        this.contactsListService.addContact(value);

        this.router.navigate(['/']);
    }
}