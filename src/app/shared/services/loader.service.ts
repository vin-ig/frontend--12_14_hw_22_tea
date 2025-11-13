import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    loadingSubject: Subject<boolean>

    constructor() {
        this.loadingSubject = new Subject<boolean>()
    }

    show() {
        this.loadingSubject.next(true)
    }

    hide() {
        this.loadingSubject.next(false)
    }
}
