import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]',
  standalone: true
})
export class NgxUnlessDirective {

  visible = false; // criada para evitar remover o viewContainer

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  /**
   * Esse método vai criar um novo template no lugar da tag <ng-template />
   */
  @Input()
  set ngxUnless(condition: boolean) {
    if (!condition && !this.visible) {
      // instanciando o template
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    } else if (condition && this.visible) {
      this.viewContainer.clear();
      this.visible = false;
    }
  }

}
