import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";
import {ProductCardComponent} from "../../shared/components/product-card/product-card.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ProductsRoutingModule} from "./products-routing.module";


@NgModule({
    declarations: [
        ProductComponent,
        ProductsComponent,
        ProductCardComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        ProductsRoutingModule,
    ],
    exports: [
        ProductsRoutingModule
    ]
})
export class ProductsModule {
}
