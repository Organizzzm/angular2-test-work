import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { ClocksComponent } from './clocks/clocks.component';

import { ContactsModule } from './contacts/contacts.module';
import { GroupsModule } from './+groups/groups.module';
import { SharedModule } from '../shared/shared.module';

import { CommonRouting } from './common.routing.module';

@NgModule({
    imports: [
        CommonRouting,
        ContactsModule,
        GroupsModule,
        SharedModule
    ],
    declarations: [
        CommonComponent,
        ClocksComponent
    ],
    exports: [],
    providers: []
})

export class MainModule {
}