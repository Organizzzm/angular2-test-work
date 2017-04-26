import { Component } from '@angular/core';

import { PopupService } from '../../popup/popup.service';

@Component({
    selector: 'add-user',
    templateUrl: '../templates/adduser.component.html',
    styleUrls: ['../styles/card.component.scss']
})

export class AddUserComponent {
    constructor(private popupService: PopupService) {}

    addUser(value: any) {
        this.popupService.close();
    }
}