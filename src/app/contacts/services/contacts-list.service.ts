import { Injectable } from '@angular/core';

import { ContactItem } from '../interfaces/contacts';

@Injectable()
export class ContactsListService {
    contacts: ContactItem[] = [
        {
            name: 'Dmitry',
            surname: 'Organizzzm',
            age: 11,
            group: 'quantum',
            distriction: 'dgsgsdgsd',
            note: 'yeah, baby!'
        },
        {
            name: 'Dmitry2',
            surname: 'Organizzzm',
            age: 11,
            group: 'quantum',
            distriction: 'dgsgsdgsd',
            note: 'yeah, baby!'
        },
        {
            name: 'Dmitry3',
            surname: 'Organizzzm',
            age: 11,
            group: 'quantum',
            distriction: 'dgsgsdgsd',
            note: 'yeah, baby!'
        }
    ];

    getContacts(): ContactItem[] {
        return this.contacts;
    }
}