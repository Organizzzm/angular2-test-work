import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'groups',
    templateUrl: './groups.component.html'
})

export class GroupsComponent implements OnInit {
    constructor(private titleService: Title) {}

    ngOnInit(){
        this.titleService.setTitle('Groups');
    }
}