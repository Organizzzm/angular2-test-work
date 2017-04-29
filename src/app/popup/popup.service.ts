import { ComponentRef, Injectable } from "@angular/core";

// export interface IOverlayHost {
//     openComponentInPopup<T>(component: Type): Promise<ComponentRef>;
// }

@Injectable()
export class PopupService {
    private host: any;

    registerHost(hostComponent: any): void {
        this.host = hostComponent;
    }

    close(){
        this.host.closePopup();
    }

    openComponentInPopup(component: any): any{
        if (!this.host) {
            throw new Error("Host is not registered");
        }

        this.host.openComponentInPopup(component);
    }
}