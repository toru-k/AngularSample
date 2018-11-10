import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UserDirective {
  constructor(el: ElementRef) {
    // Directiveの実装サンプル（下線を追加）
    const element = el.nativeElement as HTMLElement;
    element.style.textDecoration = 'underline';
  }
}
