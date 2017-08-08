import { Directive, ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[placeholder-auto-hide]'
})
export class AutoHideDirective  {
 
  @Input() placeholder: string;

  constructor(private el: ElementRef) {
  
  }

  @HostListener('focus')
  onFocus(){
    this.el.nativeElement.setAttribute('placeholder','');
  }

   @HostListener('blur')
   onBlur(){
    this.el.nativeElement.setAttribute('placeholder',this.placeholder);

  }

}
