import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {FormBuilder, Validators} from "@angular/forms";
import {LoaderService} from "../../../services/loader.service";

@Component({
    selector: 'order-component',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    providers: [ProductService],
})
export class OrderComponent implements OnInit {
    unsuccessfulRequest: boolean = false
    showForm: boolean = true

    orderForm = this.fb.group({
        product: [''],
        firstName: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё]+$')]],
        lastName: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё]+$')]],
        phone: ['', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]],
        country: ['', Validators.required],
        zip: ['', Validators.required],
        address: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-яЁё0-9\\s\\-/]+$')]],
        comment: [''],
    })

    get firstName() {return this.orderForm.get('firstName')}
    get lastName() {return this.orderForm.get('lastName')}
    get phone() {return this.orderForm.get('phone')}
    get country() {return this.orderForm.get('country')}
    get zip() {return this.orderForm.get('zip')}
    get product() {return this.orderForm.get('product')}
    get address() {return this.orderForm.get('address')}
    get comment() {return this.orderForm.get('comment')}

    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: ProductService,
        private fb: FormBuilder,
        private loaderService: LoaderService,
    ) {
    }

    ngOnInit(): void {
        const productParam = this.activatedRoute.snapshot.queryParamMap.get('product')
        if (productParam) {
             this.product?.setValue(productParam)
        }
    }

    public createOrder() {
        if (!this.checkFormValidity()) {
            alert(`Введите корректные данные!`)
            return
        }

        this.loaderService.show()
        this.productService.createOrder({
            name: this.firstName!.value!,
            last_name: this.lastName!.value!,
            phone: this.phone!.value!,
            country: this.country!.value!,
            zip: this.zip!.value!,
            product: this.product!.value!,
            address: this.address!.value!,
            comment: this.comment!.value!,
        }).subscribe((response => {
            this.loaderService.hide()
            if (response.success && !response.message) {
                this.showForm = false
            } else {
                console.log(response.message)
                this.unsuccessfulRequest = true
            }
        }))
    }

    checkFormValidity(): boolean {
        const fieldNames = Object.keys(this.orderForm.controls)

        for (const field of fieldNames) {
            const control = this.orderForm.get(field)

            if (control?.invalid) {
                return false
            }
        }
        return true
    }
}
