import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SearchService} from "../../../services/search.service";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    searchInput: string = ''

    constructor(
        private searchService: SearchService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        ) {
    }

    ngOnInit(): void {
        this.searchService.searchSubject.subscribe((query: string) => {
            this.searchInput = query
        })
    }

    search() {
        this.searchService.search(this.searchInput)
        this.router.navigate(['/products'])
    }

    clearSearch() {
        this.searchInput = ''
        this.searchService.clearSearch()

        if (this.router.url.split('?')[0] !== '/order') {
            this.search()
        }
    }
}
