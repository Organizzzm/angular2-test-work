import { Component } from '@angular/core';

import { ContactItem } from '../interfaces/contacts';

import { CardService } from '../services/card.service';

@Component({
    selector: 'contact-card',
    templateUrl: '../templates/card.component.html',
    styleUrls: ['../styles/card.component.scss']
})

export class CardComponent {
    private card: ContactItem;

    constructor(private cardService: CardService) {
        this.card = this.cardService.card;
    }
}