import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') menuOpen = false;

  constructor(private elRef: ElementRef) { }

  // @HostListener('click') menuToggle() {
  //   this.menuOpen = !this.menuOpen;
  // }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.menuOpen = this.elRef.nativeElement.contains(event.target) ? !this.menuOpen : false;
  }
}
