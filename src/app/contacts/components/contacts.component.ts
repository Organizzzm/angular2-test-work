import { Component, OnInit } from '@angular/core';

import { Menu } from '../../menu/menu';
import { ContactItem } from '../interfaces/contacts';

import { AddUserComponent } from '../components/adduser.component';

import { ContactsService } from '../services/contacts.service';
import { PopupService } from "../../popup/popup.service";

@Component({
    selector: 'contacts',
    templateUrl: '../templates/contacts.component.html',
    styleUrls: ['../styles/contacts.component.scss']
})

export class ContactsComponent implements OnInit{
    menu: Menu[] = [];
    contacts: ContactItem[] = [];
    contact: ContactItem = new ContactItem();
    selectState: boolean = false;

    constructor(
        private contactsService: ContactsService,
        private popupService: PopupService
    ) {
        this.menu = [
            { name: 'Create', active: '', link: this.addContactForm.bind(this) },
            { name: 'Edit', active: 'disabled', link: '' },
            { name: 'Delete', active: 'disabled', link: '' },
            { name: 'Select', active: '', link: this.changeSelectState.bind(this) },
        ];
    }

    addContactForm(){
        this.popupService.openComponentInPopup({
            title: 'Add New Contact',
            component: AddUserComponent
        })
    }

    addNewContact(){

    }

    changeSelectState() {
        this.selectState = !this.selectState;
        this.menu[3].name = this.selectState ? 'multiply select' : 'select';
    }

    addContactToCard(val:any){
        this.contact = val;
    }

    selectItemsHandler(count:number){
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

    ngOnInit(){
        this.contacts = this.contactsService.getContacts();
    }
}