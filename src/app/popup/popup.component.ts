import {
    Component,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    OnInit
} from '@angular/core';

import { Router } from '@angular/router';

import { PopupService } from './popup.service';

@Component({
    selector: 'popup',
    templateUrl: 'popup.component.html',
    styleUrls: ['popup.component.scss']
})

export class PopupComponent implements OnInit {
    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
    visibility: boolean = false;
    titleName: string;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private popupService: PopupService,
                private router: Router) {

    }

    openComponentInPopup(component: any): void {
        this.titleName = component.title;

        const childComponent = this.componentFactoryResolver.resolveComponentFactory(component.component);
        this.container.createComponent(childComponent);

        this.visibility = true;
    }

    popupClickHandler(event: any) {
        if (event.target.classList.contains('dark-shim')) this.closePopup();
    }

    closePopup() {
        this.visibility = false;

        setTimeout(()=> {
            this.container.clear();
        }, 300);
    }

    ngOnInit() {
        this.popupService.registerHost(this);
        this.router.events.subscribe(()=> {
            this.closePopup();
        });
    }
}