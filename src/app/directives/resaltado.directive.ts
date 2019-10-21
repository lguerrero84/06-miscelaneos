import { Directive, ElementRef , HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) { 
    console.log("Directiva llamada");
    
  }

  @Input ("appResaltado") nuevoColor: string;

  @HostListener('mouseenter')mouseEntreo(){

    this.resaltar(this.nuevoColor);
  }

  @HostListener('mouseleave') mouseSalio(){
    this.el.nativeElement.style.backgroundColor=null;
  }

  private resaltar(color:string = "yellow")
  {
    this.el.nativeElement.style.backgroundColor=color;
  }
}
