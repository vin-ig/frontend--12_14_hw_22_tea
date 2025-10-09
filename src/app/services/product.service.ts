import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderFormType} from "../types/order-form.type";

@Injectable()
export class ProductService {
    constructor(
        private http: HttpClient,
    ) {
    }

    getProducts(query?: string): Observable<ProductType[]> {
        let params = new HttpParams()
        if (query) {
            params = params.set('search', query)
        }
        return this.http.get<ProductType[]>('https://testologia.ru/tea', {
            params: params
        })
    }

    getProduct(id: number): Observable<ProductType> {
        let params = new HttpParams()
        params = params.set('id', id)
        return this.http.get<ProductType>(`https://testologia.ru/tea`, {
            params: params
        })
    }

    createOrder(data: OrderFormType) {
        return this.http.post<{ success: boolean, message?: string }>(`https://testologia.ru/order-tea`, data)
    }
}
