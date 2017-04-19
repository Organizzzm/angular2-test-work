import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'popup',
    templateUrl: 'popup.component.html',
    styleUrls: ['popup.component.scss']
})

export class PopupComponent implements OnInit{
    titleName: string;

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(){
        this.titleName = this.route.snapshot.data['title'];
    }

    closePopup(event: any): void {
        if (event.target.classList.contains('dark-shim')) {
            this.router.navigate(['/'])
        }
    }
}