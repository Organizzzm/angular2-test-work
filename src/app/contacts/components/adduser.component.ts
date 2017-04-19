import { Component } from '@angular/core';

@Component({
    selector: 'add-user',
    templateUrl: '../templates/adduser.component.html',
    styleUrls: ['../styles/card.component.scss']
})

export class AddUserComponent {
    addUser(value: any) {
        console.log(value);
    }
}