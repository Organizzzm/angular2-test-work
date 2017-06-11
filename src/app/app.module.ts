import { NgModule, ApplicationRef } from '@angular/core';

import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

// Import modules
import { MainModule } from './common/common.module';
import { CoreModule } from './core/core.module';

// Import components
import { AppComponent } from './app.component';

// Import models


// Import routes
import { routing }  from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        CoreModule,
        MainModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [Title]
})

export class AppModule {
    constructor(public appRef: ApplicationRef) {
    }

    // hmrOnInit(store: any) {
    //     console.log('HMR store', store);
    // }

    hmrOnDestroy(store: any) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
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
