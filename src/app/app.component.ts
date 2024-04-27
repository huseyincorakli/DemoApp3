import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>Ders 1</h1>
  <app-component-life-cycle [input]="title">CLC CONTENT</app-component-life-cycle> 
  <hr>
  <h1>Ders 2</h1>
  <app-angular-forms-concepts></app-angular-forms-concepts>
  `
})
export class AppComponent {
  title = 'DemoApp3'; 
  
}
