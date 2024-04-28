import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-forms-concepts',
  template:`
   <h1>Angular Forms Nedir?</h1>
   Kullanıcılardan veri almak ya da Kullanıcılarla etkileşime girebilmek için kullanılan yapılardır. <br>
   Template Driven Forms ve Model Driven(Reactive) Forms olarak ikiye ayrılır <br>
   <app-template-driven-forms></app-template-driven-forms>
   <hr>
   <app-model-driven-forms></app-model-driven-forms>
  `
})
export class AngularFormsConceptsComponent {

}
