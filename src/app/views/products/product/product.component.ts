import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoaderService} from "../../../shared/services/loader.service";

@Component({
    selector: 'product-component',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    providers: [ProductService],
})
export class ProductComponent implements OnInit {
    product: ProductType

    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: ProductService,
        private router: Router,
        private loaderService: LoaderService,
    ) {
        this.product = {
            id: 0,
            image: '',
            title: '',
            description: '',
            price: 0,
        }
    }

    ngOnInit(): void {
        this.loaderService.show()
        this.activatedRoute.params.subscribe((params) => {
            if (params['id']) {
                this.productService.getProduct(+params['id'])
                    .subscribe({
                        next: (data) => {
                            this.loaderService.hide()
                            this.product = data
                        },
                        error: (error) => {
                            console.log(error)
                            this.router.navigate(['/'])
                        }
                    })
            }
        })
    }

}
