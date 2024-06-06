import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl', // exporta para o template acessar e chamar métodos (toggle())
  standalone: true
})
export class HighlightedDirective {

  @Input('highlighted')
  isHightlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

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

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    console.log($event);
    this.isHightlighted = true;
    this.toggleHighlight.emit(this.isHightlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHightlighted = false;
    this.toggleHighlight.emit(this.isHightlighted);
  }

  toggle() {
    this.isHightlighted = !this.isHightlighted;
    this.toggleHighlight.emit(this.isHightlighted);
  }
}
