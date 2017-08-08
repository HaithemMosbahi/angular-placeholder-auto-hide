import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[placeholder-auto-hide]'
})
export class PlaceholderAutoHideDirective {

  constructor(private el: ElementRef) {
  }

}
