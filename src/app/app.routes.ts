import { Routes, RouterModule } from '@angular/router';

import { CommonComponent } from './common/common.component';

const routes: Routes = [
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: '', component: CommonComponent },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
    { path: '404', loadChildren: './+404/404.module#NotFoundModule?chunkName=404' }
];

export const routing = RouterModule.forRoot(routes);
