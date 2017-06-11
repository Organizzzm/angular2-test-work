import { Component, Input } from '@angular/core';

import { ContactItem } from '../interfaces/contacts';

@Component({
    selector: 'contact-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent {
    @Input() currentContact: ContactItem;
}