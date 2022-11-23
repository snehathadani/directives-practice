import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparaent';
  @Input() highlightColor: string = 'blue';

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  //in order to make it for dynamic rendering 
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef) { }
  //  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    // this.backgroundColor = 'blue' this is before dynamic rendering to bind this from o/s
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    //use below style to bind this from o/s after adding 7 and 8
    this.backgroundColor = this.defaultColor
  }

}
