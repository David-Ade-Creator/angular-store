import { Directive, HostBinding, Input,HostListener} from '@angular/core';
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

@Directive({
  selector: '[clickColor]'
})
export class ClickColorDirective {

  private toggle: boolean = false;
  @Input() color: string = 'green';

  constructor(private doms: DomSanitizer) { }

  @HostBinding('style') get myStyle(): SafeStyle {
    let style : string = this.toggle ? `color: ${this.color}` : '';
    return this.doms.bypassSecurityTrustStyle(style);
  }

  @HostListener('click') onClick() {
    this.toggle = !this.toggle;
  }

}
