import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
    selector: 'popup-component',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, OnDestroy {
    @ViewChild('modalElement')
    modalElement: ElementRef | null = null

    private observable: Observable<void>
    private subscription: Subscription | null = null

    constructor(
        private rend: Renderer2,
    ) {
        this.observable = new Observable((observer) => {
            const timeout = setTimeout(() => {
                observer.next()
            }, 10000)

        return {
            unsubscribe() {
                console.log('Observable UNSUBSCRIBE')
                clearTimeout(timeout)
            }
        }
        })
    }

    ngOnInit(): void {
        this.subscription = this.observable.subscribe(() => {
            console.log('SHOW MODAL')
            this.rend.addClass(this.modalElement?.nativeElement, 'd-block')
        })
    }

    ngOnDestroy() {
        console.log('OnDestroy UNSUBSCRIBE')
        this.subscription?.unsubscribe()
    }

    closeModal() {
        this.rend.removeClass(this.modalElement?.nativeElement, 'd-block')
        this.subscription?.unsubscribe()
    }
}
