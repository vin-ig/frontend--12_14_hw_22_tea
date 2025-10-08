import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { ProductComponent } from './components/pages/product/product.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { OrderComponent } from './components/pages/order/order.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ProductCardComponent } from './components/common/product-card/product-card.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PopupComponent } from './components/common/popup/popup.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        ProductComponent,
        ProductsComponent,
        OrderComponent,
        HeaderComponent,
        FooterComponent,
        ProductCardComponent,
        PopupComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
