import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { ContactItem } from '../interfaces/contacts';


@Injectable()
export class ContactsService {
    public contacts: ContactItem[] = [];
    private addContactSource = new Subject<ContactItem>();
    private removeContactSource = new Subject<ContactItem>();

    addContact$ = this.addContactSource.asObservable();
    removeContact$ = this.removeContactSource.asObservable();

    getContacts(): void {
        this.contacts = [
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
    }

    addContact(obj: ContactItem): void {
        //save contact and call callback =>
        this.contacts.push(obj);
    }

    removeContacts(): void {
        //remove contact and call callback =>
        this.contacts = this.contacts.filter(contact => {
            return !contact.select;
        });

        this.removeContactSource.next();
    }

    updateContact(contact: ContactItem, oldContact: ContactItem) {
        //update contact and call cllnack
        let index: number;
        index = this.contacts.indexOf(oldContact, 0);

        if (index > -1)
            this.contacts[index] = contact;
    }
}