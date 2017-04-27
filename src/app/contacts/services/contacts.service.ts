import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

// import { Menu } from '../../menu/menu';
import { ContactItem } from '../interfaces/contacts';


@Injectable()
export class ContactsService {
    public contacts: ContactItem[] = [];
    private addContactSource = new Subject<ContactItem>();

    addContact$ = this.addContactSource.asObservable();

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
        this.addContactSource.next(obj);
    }

    removeContacts(): void {
        //remove contact and call callback =>
        let index: number;

        this.contacts.forEach(contact => {
            if (contact.select)
                index = this.contacts.indexOf(contact, 0);

            if (index > -1)
                this.contacts.splice(index, 1);
        });
    }

}