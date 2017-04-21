import { Injectable } from '@angular/core';

import { Menu } from '../../menu/menu';

@Injectable()
export class ContactsService {
    public contactsMenu: Menu[];

    constructor() {
        this.contactsMenu = [
            { name: 'Create', active: '', link: 'create' },
            { name: 'Edit', active: 'disabled', link: '' },
            { name: 'Delete', active: 'disabled', link: '' },
            { name: 'Select', active: '', link: '' },
        ];
    }

    checkCountOfItems(count: number): void {
        if (count == 1) {
            this.contactsMenu[1].active = '';
            this.contactsMenu[2].active = '';
        }

        if(count == 0){
            this.contactsMenu[1].active = 'disabled';
            this.contactsMenu[2].active = 'disabled';
        }

        if(count > 1){
            this.contactsMenu[1].active = 'disabled';
            this.contactsMenu[2].active = '';
        }
    }
}