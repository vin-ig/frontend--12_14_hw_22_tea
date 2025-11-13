import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from "./main.component";
import {NgbAccordionModule, NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        NgbAccordionModule,
        NgbCarouselModule,
        SharedModule,
        MainRoutingModule
    ],
    exports: [
        MainRoutingModule
    ]
})
export class MainModule {
}
