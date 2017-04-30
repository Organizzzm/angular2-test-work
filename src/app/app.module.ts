import { NgModule, ApplicationRef } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

// Import modules
import { CommonModule } from './common/common.module';
import { NotFoundModule } from './404/404.module';
import { PopupModule } from './popup/popup.module';

// Import components
import { AppComponent } from './app.component';

//Import models
import {InMemoryDataService} from './models/contacts.model';

// Import routes
import { routing }  from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        CommonModule,
        NotFoundModule,
        PopupModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [Title]
})

export class AppModule {
    constructor(public appRef: ApplicationRef) {}

    // hmrOnInit(store: any) {
    //     console.log('HMR store', store);
    // }

    hmrOnDestroy(store: any) {
        var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store: any) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}