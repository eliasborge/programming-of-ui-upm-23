

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFieldFocus]'
})
export class FieldFocusDirective {
  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.el.nativeElement.classList.add('focus-input');
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.classList.remove('focus-input');
  }
}
