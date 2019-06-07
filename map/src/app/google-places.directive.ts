import {Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

declare var google: any;

@Directive({
  selector: '[appGooglePlaces]'
})
export class GooglePlacesDirective implements OnInit {

  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  ngOnInit(): void {
    const autoComplete = new google.maps.places.Autocomplete(this.element);
    console.log('autoComplete', autoComplete);

    google.maps.event.addListener(autoComplete, 'place_changed', () => {

      console.log('Inside google map listener');

      const place = autoComplete.getPlace();
      console.log('Found place ', place);
      this.onSelect.emit({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      });

      console.log('finish emitting');

    });

  }

}
