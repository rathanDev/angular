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

    google.maps.event.addListener(autoComplete, 'place_changed', () => {
      console.log('this', this);
      this.getFormattedAddress(autoComplete.getPlace());
    });

  }

  getFormattedAddress(place) {
    console.log('place ', place);
    console.log('address ', place.formatted_address);
    console.log('lat ', place.geometry.location.lat());
    console.log('lng ', place.geometry.location.lng());
  }

}
