import { ComponentFactoryResolver, Injectable, Injector, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  open(content: TemplateRef<any>, options?: { size?: string, title?: string }) {
    console.log('open modal')
  }
}
