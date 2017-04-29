import { Component, Input } from '@angular/core';

import { ContactItem } from '../interfaces/contacts';

@Component({
    selector: 'contact-card',
    templateUrl: '../templates/card.component.html',
    styleUrls: ['../styles/card.component.scss']
})

export class CardComponent {
    @Input('currentContact') card: ContactItem;
}