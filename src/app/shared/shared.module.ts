import { NgModule } from '@angular/core';
import {CommonModule}   from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent }   from './menu/menu.component';
import { NavBarComponent }   from './navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MenuComponent,
        NavBarComponent
    ],
    declarations: [
        MenuComponent,
        NavBarComponent
    ],
    providers: [],
})

export class SharedModule {}
