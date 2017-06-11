import { NgModule } from '@angular/core';

import { GroupsComponent } from './groups.component';

import { SharedModule } from '../../shared/shared.module';
import { GroupsRouter } from './groups.router.module';

@NgModule({
    imports: [
        SharedModule,
        GroupsRouter
    ],
    declarations: [GroupsComponent],
    exports: [],
    providers: []
})

export class GroupsModule {}