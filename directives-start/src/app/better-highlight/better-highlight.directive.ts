import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'red';

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // Esto ejecutará algo (cambio de color) en el componente al invocarse en el mismo “mouseenter”
   // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
   this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // Esto ejecutará algo (cambio de color) en el componente al invocarse en el mismo “mouseenter”
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
      this.backgroundColor = this.defaultColor;
  }

}
