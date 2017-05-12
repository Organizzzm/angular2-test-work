import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { ContactItem } from '../interfaces/contacts';


@Injectable()
export class ContactsService {
    private contactsUrl = 'app/contacts';

    public contacts: ContactItem[] = [];
    private addContactSource = new Subject<ContactItem>();
    private removeContactSource = new Subject<ContactItem>();

    constructor(private http: Http) {
    }

    addContact$ = this.addContactSource.asObservable();
    removeContact$ = this.removeContactSource.asObservable();

    getContacts(): Promise<ContactItem[]> {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(res => res.json().data as ContactItem[])
            .catch(this.handleError);
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

    private handleError(error: any) {
        console.log('An error occured - ', error);
        return Promise.reject(error.message || error);
    }
}