import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //use @Input to bind to a property name "unless"
  //whenever condition specified inside unless changes i.e. some input parameter changes i wamt to execute a method
  //setter turns unless into a method
@Input() set appUnless(condition: boolean) {
  if (!condition){
    this.vcRef.createEmbeddedView(this.templateRef)
  }else {
    this.vcRef.clear()
  }
}
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
