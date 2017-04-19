import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PopupComponent } from './popup.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [PopupComponent],
    exports: [PopupComponent],
    providers: []
})

export class PopupModule {}