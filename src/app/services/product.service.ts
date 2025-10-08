import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ProductService {
    constructor(
        private http: HttpClient,
    ) {
    }

    getProducts(): Observable<ProductType[]> {
        return this.http.get<ProductType[]>('https://testologia.ru/tea')
    }

    getProduct(id: number): Observable<ProductType> {
        let params = new HttpParams()
        params = params.set('id', id)
        return this.http.get<ProductType>(`https://testologia.ru/tea`,{
            params: params
        })
    }

    createOrder(data: {product: string, address: string, phone: string}) {
        return this.http.post<{ success: boolean, message?: string }>(`https://testologia.ru/order-tea`, data)
    }
}
