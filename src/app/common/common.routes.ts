import { Routes, RouterModule } from '@angular/router';

import { CommonComponent } from './common.component';
import { ContactsComponent } from '../contacts/components/contacts.component';
import { GroupsComponent } from '../groups/groups.component';
import { ClocksComponent } from '../clocks/clocks.component';

const routes: Routes = [
    {
        path: 'contacts',
        component: CommonComponent,
        children: [
            {
                path: '',
                component: ContactsComponent
            }
        ]
    },
    {
        path: 'groups',
        component: CommonComponent,
        children: [
            {
                path: '',
                component: GroupsComponent
            }
        ]
    },
    {
        path: 'clocks',
        component: CommonComponent,
        children: [
            {
                path: '',
                component: ClocksComponent
            }
        ]
    },
];

export const routing = RouterModule.forChild(routes);
