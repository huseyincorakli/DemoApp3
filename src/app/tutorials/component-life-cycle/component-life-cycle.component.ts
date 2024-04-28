import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-life-cycle',
  template:`
  <h1>Component Life Cycle</h1>
  Bir componentin oluşturulduğu andan imha edildiği ana kadar olan metotları ifade eder. <br>
  Her metod farklı aşamalarda çalışır ve birbirlerinden farklı görevleri yerine getirir. <br>
  Aşağıdaki sıraya göre gerçekleşir :<br>
  constructor - ngOnChanges - ngOnInit - ngDoCheck - ngAfterContentInit - ngAfterContentChecked - ngAfterViewInit - ngAfterViewChecked - ngOnDestroy <br>
  <hr>
  ngOnChanges: componentin input değişkenleri selector refereansı üzerinden değiştiği anda tetiklenir <br>
  ngOnInit: component ilk kez oluşturulduğu anda tetiklenir<br>
  ngDoCheck: componente oluşan değişiklik sonrası tetiklenir [değer değişiyorsa] <br>
  ngOnChanges:component contenti ilk kez oluşturulduğunda tetiklenir <br>
  ngAfterContentChecked:component contenti değiştiğinde tetiklenir <br>
  ngAfterViewInit:component view i yani template i ilk kez oluştuğunda gerçekleşir <br>
  ngAfterViewChecked:component view da oluşan değişiklik sonrası tetiklenir. <br>
  ngOnDestroy: componentin imhası durumunda tetiklenir

  <hr>
  <input type="text" [(ngModel)]="input"> 
  {{input}}
  <ng-content></ng-content>
  
  `
})
export class ComponentLifeCycleComponent {
  
  
 
 @Input() input :string="123123";
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("1-ngOnChanges")
  // }
  // ngOnInit(): void {
  //   console.log("2-ngOnInit")
  // }
  // ngDoCheck(): void {
  //   console.log("3-ngDoCheck")
  // }
  // ngAfterContentInit(): void {
  //   console.log("4-ngAfterContentInit")
  // }
  // ngAfterContentChecked(): void {
  //   console.log("5-ngAfterContentChecked")
  // }
  // ngAfterViewInit(): void {
  //   console.log("6-ngAfterViewInit")
  // }
  // ngAfterViewChecked(): void {
  //   console.log("7-ngAfterViewChecked");
    
  // }
  // ngOnDestroy(): void {
  //   console.log("8-ngOnDestroy");
  // }
  
  
  

}
