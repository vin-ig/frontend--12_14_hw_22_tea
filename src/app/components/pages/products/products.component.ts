import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
    selector: 'products-component',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    providers: [ProductService],
})
export class ProductsComponent implements OnInit {
    public products: ProductType[] = []
    loading: boolean = true

    constructor(
        private productService: ProductService,
        private router: Router,
        ) {
    }

    ngOnInit(): void {
        this.loading = true
        return
        this.productService.getProducts()
            .pipe(
                tap(() => {
                    this.loading = false
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
