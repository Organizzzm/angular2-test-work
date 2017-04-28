import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PopupComponent } from './popup.component';
import { AddUserComponent } from "../contacts/components/adduser.component";
import { RemoveContactsComponent } from "../contacts/components/remove-contact.component";
import { EditContactsComponent } from "../contacts/components/edit-contact.component";

@NgModule({
    imports: [
        BrowserModule,
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