import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {PopupComponent} from "./components/popup/popup.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        PopupComponent,
        LoaderComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        PopupComponent,
        LoaderComponent,
    ],
})
export class SharedModule {
}
