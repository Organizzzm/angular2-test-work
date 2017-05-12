import { Routes, RouterModule } from '@angular/router';

import { PopupComponent } from './popup.component';

const routes: Routes = [
    {
        path: 'contacts',
        component: PopupComponent,
        outlet: 'popup'
    }
];

export const routing = RouterModule.forChild(routes);
