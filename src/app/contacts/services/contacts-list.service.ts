import { Injectable } from '@angular/core';

import { ContactItem } from '../interfaces/contacts';

@Injectable()
export class ContactsListService {
    constructor(){}

    contacts: ContactItem[] = [
        {
            name: 'Dmitry',
            surname: 'Organizzzm',
            age: 11,
            group: 'quantum',
            distriction: 'dgsgsdgsd',
            note: 'yeah, baby!',
            select: false
        },
        {
            name: 'Dmitry2',
            surname: 'Organizzzm',
            age: 11,
            group: 'quantum',
            distriction: 'dgsgsdgsd',
            note: 'yeah, baby!',
            select: false
        },
        {
            name: 'Dmitry3',
            surname: 'Organizzzm',
            age: 11,
            group: 'quantum',
            distriction: 'dgsgsdgsd',
            note: 'yeah, baby!',
            select: false
        }
    ];

    // getContacts(): ContactItem[] {
    //     return this.contacts;
    // }

    addContact(obj: ContactItem): void {
        this.contacts.push(obj);
    }
}