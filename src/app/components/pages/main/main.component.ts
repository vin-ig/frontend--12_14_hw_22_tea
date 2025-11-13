import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    faqList: {question: string, answer: string}[] = [
        {
            question: 'Собираете ли вы подарочные боксы?',
            answer: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!',
        },
        {
            question: 'Сколько у вас разновидностей чая?',
            answer: 'У нас более 48 различных сортов и видов чая!',
        },
        {
            question: 'В какой срок осуществляется доставка?',
            answer: 'Сроки доставки зависят от выбранного способа и вашего местоположения.',
        },
        {
            question: 'У вас обновляется ассортимент?',
            answer: 'Конечно! Наиболее популярные виды чая в продаже есть всегда, но мы постоянно ищем что-то новое и хотим приятно удивить наших постоянных клиентов!',
        },
        {
            question: 'Какого объема у вас пачки чая?',
            answer: 'Вы можете выбрать наиболее подходящие вам варианты фасовки чая из следующего ряда: 100 гр, 150 гр, 200 гр, 500 гр.',
        },
    ]

    constructor(private config: NgbCarouselConfig) {
        config.interval = 3000
        config.showNavigationIndicators = false
    }

    ngOnInit(): void {
    }

}
