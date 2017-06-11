import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PopupComponent } from './popup.component';
import { AddUserComponent } from "../../common/contacts/add-contact/add-contact.component";
import { RemoveContactsComponent } from "../../common/contacts/remove-contact/remove-contact.component";
import { EditContactsComponent } from "../../common/contacts/edit-contact/edit-contact.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        PopupComponent,
        AddUserComponent,
        RemoveContactsComponent,
        EditContactsComponent
    ],
    exports: [
        PopupComponent
    ],
    entryComponents: [
        AddUserComponent,
        RemoveContactsComponent,
        EditContactsComponent
    ],
    providers: []
})

export class PopupModule {
}