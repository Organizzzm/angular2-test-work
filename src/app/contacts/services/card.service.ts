import { Injectable } from '@angular/core';

import { ContactItem } from '../interfaces/contacts';

@Injectable()
export class CardService {
    card: ContactItem = {
        name: '',
        surname: '',
        age: 0,
        group: '',
        distriction: '',
        note: '',
        select: false
    };

    setUserToCard(user: ContactItem): void {
        this.card.name = user.name;
        this.card.surname = user.surname;
        this.card.age = user.age;
        this.card.group = user.group;
        this.card.distriction = user.distriction;
        this.card.note = user.note;
    }

    clearCard(): void {
        this.card.name = '';
        this.card.surname = '';
        this.card.age = 0;
        this.card.group = '';
        this.card.distriction = '';
        this.card.note = '';
    }
}