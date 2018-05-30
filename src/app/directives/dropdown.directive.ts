import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean;
    constructor() {}

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}
