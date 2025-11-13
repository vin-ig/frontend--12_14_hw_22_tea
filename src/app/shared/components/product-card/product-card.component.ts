import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";

@Component({
    selector: 'product-card-component',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

    private _product: ProductType

    @Input()
    get product(): ProductType {return this._product}
    set product(data: ProductType) {this._product = data}

    constructor() {
        this._product = {
            id: 0,
            image: '',
            title: '',
            description: '',
            price: 0,
        }
    }

    ngOnInit(): void {
    }

}
