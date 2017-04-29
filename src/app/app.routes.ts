import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './404/404.component';
import { CommonComponent } from './common/common.component';

const routes: Routes = [
    // { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: '', component: CommonComponent },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
    { path: '404', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);