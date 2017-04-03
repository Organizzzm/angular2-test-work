import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';

@NgModule({
    imports: [RouterModule],
    declarations: [GroupsComponent],
    exports: [GroupsComponent],
    providers: []
})

export class GroupsModule {}