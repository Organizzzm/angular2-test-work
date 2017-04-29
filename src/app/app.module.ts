import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { removeNgStyles, createNewHosts, bootloader } from '@angularclass/hmr';

// Import modules
import { CommonModule } from './common/common.module';
import { NotFoundModule } from './404/404.module';
import { PopupModule } from './popup/popup.module';

// Import components
import { AppComponent } from './app.component';

// Import routes
import { routing }  from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        CommonModule,
        NotFoundModule,
        PopupModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: []
})

export class AppModule {
    constructor(public appRef: ApplicationRef) {
    }

    //TODO: need remove
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

//TODO: need remove
// export function main() {
//     return platformBrowserDynamic().bootstrapModule(AppModule);
// }

// bootloader(main);