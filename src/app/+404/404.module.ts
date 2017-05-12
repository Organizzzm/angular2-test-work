import { NgModule } from '@angular/core';

import { NotFountRouter } from './404.routing.module';
import { NotFoundComponent } from './404.component';

@NgModule({
    imports: [NotFountRouter],
    declarations: [NotFoundComponent]
})

export class NotFoundModule {
}