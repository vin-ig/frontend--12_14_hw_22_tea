import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {LoaderService} from "../../../services/loader.service";

@Component({
    selector: 'products-component',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    providers: [ProductService],
})
export class ProductsComponent implements OnInit {
    public products: ProductType[] = []

    constructor(
        private productService: ProductService,
        private router: Router,
        private loaderService: LoaderService,
        ) {
    }

    ngOnInit(): void {
        this.loaderService.show()
        this.productService.getProducts()
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
