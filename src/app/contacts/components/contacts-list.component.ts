import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ContactItem } from '../interfaces/contacts';

@Component({
    selector: 'contacts-list',
    templateUrl: '../templates/contacts-list.component.html',
    styleUrls: ['../styles/contacts-list.component.scss']
})

export class ContactsListComponent {
    @Input() contactsList: ContactItem[];
    @Input() selectState: boolean;

    @Output() tableClick: EventEmitter<any> = new EventEmitter();
    @Output() itemsCountEvent: EventEmitter<number> = new EventEmitter();

    countOfSelectItems = 0;

    tableClickHandler(value: ContactItem): void {
        if (!this.selectState) {
            this.contactsList.forEach(item => {
                item.select = false;
            });

            this.countOfSelectItems = 0;
        }

        value.select = !value.select;

        if (value.select) this.countOfSelectItems++;
        else this.countOfSelectItems--;

        if (this.countOfSelectItems == 0) this.tableClick.emit(new ContactItem());
        else this.tableClick.emit(value);

        this.itemsCountEvent.emit(this.countOfSelectItems);
    }
}