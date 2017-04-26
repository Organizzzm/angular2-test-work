import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PopupComponent } from './popup.component';
import { AddUserComponent } from "../contacts/components/adduser.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [PopupComponent, AddUserComponent],
    exports: [PopupComponent, AddUserComponent],
    entryComponents: [AddUserComponent],
    providers: []
})

export class PopupModule {
}