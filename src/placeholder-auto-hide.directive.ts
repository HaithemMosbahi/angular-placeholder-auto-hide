import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[placeholder-auto-hide]'
})
export class PlaceholderAutoHideDirective {

  @Input() placeholder: string;

  constructor(private el: ElementRef) {

  }

  /**
   * Listen to focus event on input field in order to hide the placeholder
   */
  @HostListener('focus')
  onFocus() {
    if (this.placeholder) {
      this.el.nativeElement.setAttribute('placeholder', '');
    }
  }
  
  /**
   * Listen to focusout event on input field in order to redisplay the placeholder
   */
  @HostListener('focusout')
  onBlur() {
    if (this.placeholder) {
      this.el.nativeElement.setAttribute('placeholder', this.placeholder);
    }

  }

}
