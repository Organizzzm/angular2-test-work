import { Routes, RouterModule } from '@angular/router';

import { CommonComponent } from './common.component';
import { ContactsComponent } from '../contacts/components/contacts.component';
import { GroupsComponent } from '../groups/groups.component';
import { ClocksComponent } from '../clocks/clocks.component';

const routes: Routes = [
    {
        path: '',
        component: CommonComponent,
        children: [
            {
                path: '',
                redirectTo: 'contacts',
                pathMatch: 'full'
            },
            {
                path: 'contacts',
                component: ContactsComponent
            },
            {
                path: 'groups',
                component: GroupsComponent
            },
            {
                path: 'clocks',
                component: ClocksComponent
            },
        ]
    }
];

export const routing = RouterModule.forChild(routes);
