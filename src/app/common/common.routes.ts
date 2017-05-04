import { Routes, RouterModule } from '@angular/router';

import { CommonComponent } from './common.component';
import { ContactsComponent } from '../contacts/components/contacts.component';
// import { AddUserComponent } from '../contacts/components/adduser.component';
import { GroupsComponent } from '../groups/groups.component';
import { ClocksComponent } from '../clocks/clocks.component';
// import { PopupComponent } from '../popup/popup.component';

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
            // {
            //     path: 'contacts',
            //     component: ContactsComponent
            //     // children: [
            //     //     {
            //     //         path: 'create',
            //     //         component: PopupComponent,
            //     //         data: {title: 'Add New User'},
            //     //         children: [
            //     //             {
            //     //                 path: '',
            //     //                 component: AddUserComponent
            //     //             }
            //     //         ]
            //     //     }
            //     // ]
            // },
            {
                path: 'groups',
                component: GroupsComponent
            },
            {
                path: 'clocks',
                component: ClocksComponent
            }
        ]
    }
];

export const routing = RouterModule.forRoot(routes);
