import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;

  constructor(private el: ElementRef) { }
  
  @HostListener('focus')
  onFocus(){
    console.log("On focus");
  }
  
  @HostListener('blur')
  onBlur(){
    console.log("On blur");
    let value: string = this.el.nativeElement.value;
    if(this.format =='uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLocaleLowerCase();
  }

}
