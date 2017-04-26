import { Injectable } from '@angular/core';

import { Menu } from '../../menu/menu';
import { ContactItem } from '../interfaces/contacts';

import { AddUserComponent } from "../components/adduser.component";


@Injectable()
export class ContactsService {
    public contacts: ContactItem[];

    constructor() {
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

    getContacts() {
        return this.contacts;
    }


    // addContact(obj: ContactItem): void {
    //     this.contacts.push(obj);
    // }
    //
    // openAddUserPopup(): void {
    //     this.popupService.openComponentInPopup({
    //         title: 'Add New User',
    //         component: AddUserComponent
    //     });
    // }
    //
    // openEditUserPopup(){
    //     this.popupService.openComponentInPopup({
    //         title: 'Edit User',
    //         component: AddUserComponent
    //     });
    // }

    // checkCountOfItems(count: number): void {
    //     if (count == 1) {
    //         this.contactsMenu[1].active = '';
    //         this.contactsMenu[2].active = '';
    //     }
    //
    //     if (count == 0) {
    //         this.contactsMenu[1].active = 'disabled';
    //         this.contactsMenu[2].active = 'disabled';
    //     }
    //
    //     if (count > 1) {
    //         this.contactsMenu[1].active = 'disabled';
    //         this.contactsMenu[2].active = '';
    //     }
    // }
}