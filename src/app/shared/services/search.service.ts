import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    searchSubject: Subject<string>
    currentQuery: string = ''

    constructor() {
        this.searchSubject = new Subject<string>()
    }

    search(query: string) {
        this.searchSubject.next(query)
        this.currentQuery = query
    }

    clearSearch() {
        this.currentQuery = ''
        this.searchSubject.next('')
    }
}
