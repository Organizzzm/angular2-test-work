import { NgModule } from '@angular/core';

import { CommonComponent } from './common.component';
import { NavBarComponent } from '../navbar/navbar.component';
import { ClocksComponent } from '../clocks/clocks.component';

import { ContactsModule } from '../contacts/contacts.module';
import { GroupsModule } from '../groups/groups.module';

import { routing } from './common.routes';

@NgModule({
    imports: [
        routing,
        ContactsModule,
        GroupsModule
    ],
    declarations: [
        CommonComponent,
        NavBarComponent,
        ClocksComponent
    ],
    exports: [
        CommonComponent,
        NavBarComponent,
        ClocksComponent
    ],
    providers: []
})

export class CommonModule {
}