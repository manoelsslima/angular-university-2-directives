import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true
})
export class HighlightedDirective {

  @Input('highlighted')
  isHightlighted = false;

  constructor() {
    console.log('Directive created...');
  }

  /**
   * 
   */
  // @HostBinding('className') // à qual propriedade do DOM queremos atribuir esse valor
  //   get cssClasses() { // nome que escolhemos
  //   return "highlighted"; // css que queremos aplicar ao elemento host dessa diretiva
  // }
  /**
   * Vincula o host a um novo método
   */
  @HostBinding('class.highlighted') // à qual propriedade do DOM queremos atribuir esse valor
  get cssClasses() { // nome que escolhemos
    return this.isHightlighted; // css que queremos aplicar ao elemento host dessa diretiva
  }

}
