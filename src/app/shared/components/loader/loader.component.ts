import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../../services/loader.service";

@Component({
    selector: 'loader-component',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

    loading: boolean = false

    constructor(private loaderService: LoaderService) {
    }

    ngOnInit(): void {
        this.loaderService.loadingSubject.subscribe((loading: boolean) => {
            this.loading = loading
        })
    }

}
