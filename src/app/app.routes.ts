import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './404/404.component';

const routes: Routes = [
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
    { path: '404', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);