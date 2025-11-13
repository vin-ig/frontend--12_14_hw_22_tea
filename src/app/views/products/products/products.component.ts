import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {LoaderService} from "../../../shared/services/loader.service";
import {SearchService} from "../../../shared/services/search.service";

@Component({
    selector: 'products-component',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    providers: [ProductService],
})
export class ProductsComponent implements OnInit, OnDestroy {
    public products: ProductType[] = []
    searchQuery: string = ''

    constructor(
        private productService: ProductService,
        private router: Router,
        private loaderService: LoaderService,
        private searchService: SearchService,
        ) {
    }

    ngOnInit(): void {
        this.searchQuery = this.searchService.currentQuery
        this.getProducts()
        this.searchService.searchSubject.subscribe((query: string) => {
            this.searchQuery = query
            this.getProducts()
        })
    }

    ngOnDestroy() {
        this.searchService.clearSearch()
    }

    getProducts() {
        this.loaderService.show()
        this.productService.getProducts(this.searchQuery)
            .pipe(
                tap(() => {
                    this.loaderService.hide()
                })
            )
            .subscribe({
                next: (data) => {
                    this.products = data
                },
                error: (error) => {
                    console.log(error)
                    this.router.navigate(['/'])
                }
            })
    }
}
