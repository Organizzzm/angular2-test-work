import { NgModule } from '@angular/core';

import { GroupsComponent } from './groups.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
    imports: [MenuModule],
    declarations: [GroupsComponent],
    exports: [GroupsComponent],
    providers: []
})

export class GroupsModule {}