import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PopupComponent } from './popup.component';
import { AddUserComponent } from "../contacts/components/adduser.component";
import { RemoveContactsComponent } from "../contacts/components/remove-contact.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        PopupComponent,
        AddUserComponent,
        RemoveContactsComponent
    ],
    exports: [
        PopupComponent
    ],
    entryComponents: [
        AddUserComponent,
        RemoveContactsComponent
    ],
    providers: []
})

export class PopupModule {
}