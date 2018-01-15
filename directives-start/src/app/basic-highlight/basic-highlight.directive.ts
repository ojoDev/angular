import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appHighligth]'
})
export class BasicHighligthDirective implements OnInit { 

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
