import {Directive, ElementRef, OnInit} from '@angular/core';
declare var google: any;

@Directive({
  selector: '[appGooglePlace]'
})
export class GooglePlaceDirective implements OnInit {

  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  ngOnInit(): void {
    const autoComplete = new google.maps.places.Autocomplete(this.element);
    console.log('autoComplete ', autoComplete);
  }

}
