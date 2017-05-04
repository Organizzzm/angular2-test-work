import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule}   from '@angular/common';
import { MenuComponent } from './menu.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MenuComponent],
    exports: [MenuComponent],
    providers: []
})

export class MenuModule {
}