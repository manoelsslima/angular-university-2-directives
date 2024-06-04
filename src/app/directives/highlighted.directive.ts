import { Directive } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true
})
export class HighlightedDirective {

  constructor() {
    console.log('Directive created...');
  }

}
