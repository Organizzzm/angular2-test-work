import { NgModule, Optional, SkipSelf } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { throwIfAlreadyLoaded } from './module-import-guard';

// Modules
import { PopupModule } from './popup/popup.module';

// Services
import { PopupService } from "./popup/popup.service";

// Models for local test
import { InMemoryDataService } from '../models/contacts.model';


@NgModule({
    imports: [
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        PopupModule
    ],
    declarations: [],
    exports: [
        PopupModule
    ],
    providers: [
        PopupService
    ],
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
