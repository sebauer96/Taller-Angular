import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() colorText = 'black';

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('yellow')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('red')
  }

  constructor(public el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red'

  }


  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = this.colorText
  }

}
