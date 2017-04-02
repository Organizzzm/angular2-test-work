import {Component, ViewEncapsulation} from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['../assets/css/entry.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    title: string = '==> Tour of Heroes! <==';
    hero: Hero = {
        id: 1,
        name: 'Windstorm - '
    };
}