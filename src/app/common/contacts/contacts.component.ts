import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Menu } from '../../shared/menu/menu';
import { ContactItem } from './interfaces/contacts';

import { AddUserComponent } from './add-contact/add-contact.component';
import { RemoveContactsComponent } from './remove-contact/remove-contact.component';
import { EditContactsComponent } from './edit-contact/edit-contact.component';

import { ContactsService } from './contacts.service';
import { PopupService } from "../../core/popup/popup.service";

@Component({
    selector: 'contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
    public menu: Menu[] = [];
    public contacts: ContactItem[];
    public contact: ContactItem = new ContactItem();
    public selectState: boolean = false;

    constructor(private contactsService: ContactsService,
                private popupService: PopupService,
                private titleService: Title) {

        this.menu = [
            { name: 'Create', active: '', link: this.addContactForm.bind(this) },
            { name: 'Edit', active: 'disabled', link: this.addEditContactsForm.bind(this) },
            { name: 'Delete', active: 'disabled', link: this.addRemoveContactsForm.bind(this) },
            { name: 'Select', active: '', link: this.changeSelectState.bind(this) },
        ];

        this.contactsService.removeContact$.subscribe(() => {
            this.contacts = this.contactsService.contacts;
        });
    }

    ngOnInit() {
        this.titleService.setTitle('Contacts');

        this.contactsService.getContacts()
            .then(contacts => this.contacts = contacts)
            .catch(error => console.log(error));
    }

    addContactForm() {
        this.popupService.openComponentInPopup({
            title: 'Add New Contact',
            component: AddUserComponent
        })
    }

    addRemoveContactsForm() {
        if (this.menu[2].active === '') {
            this.popupService.openComponentInPopup({
                title: 'Are You Want Remove Select Contacts?',
                component: RemoveContactsComponent
            })
        }
    }

    addEditContactsForm() {
        const contacts = this.contacts.filter(contact => {
            return contact.select;
        });

        if (contacts.length == 1) {
            this.popupService.openComponentInPopup({
                title: 'Edit Contact?',
                component: EditContactsComponent
            })
        }
    }

    changeSelectState() {
        this.selectState = !this.selectState;
        this.menu[3].name = this.selectState ? 'multiply select' : 'select';
    }

    addContactToCard(val: any) {
        this.contact = val;
    }

    selectItemsHandler(count: number) {
        if (count == 1) {
            this.menu[1].active = '';
            this.menu[2].active = '';
        }

        if (count == 0) {
            this.menu[1].active = 'disabled';
            this.menu[2].active = 'disabled';
        }

        if (count > 1) {
            this.menu[1].active = 'disabled';
            this.menu[2].active = '';
        }
    }
}