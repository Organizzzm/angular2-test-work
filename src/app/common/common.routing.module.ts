import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CommonComponent } from './common.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ClocksComponent } from './clocks/clocks.component';

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
                loadChildren: './+groups/groups.module#GroupsModule'
            },
            {
                path: 'clocks',
                component: ClocksComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class CommonRouting {}
