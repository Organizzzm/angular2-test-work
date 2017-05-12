import { Component, Input } from '@angular/core';

import { Menu } from '../menu/menu';

@Component({
    selector: 'list-menu',
    templateUrl: 'menu.component.html'
})

export class MenuComponent {
    @Input() menu: Menu[];
}