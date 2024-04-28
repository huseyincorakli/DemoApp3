import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-forms',
  template:`
  
  <h3>Model Driven Forms Nedir?</h3>
  Formun yapısının nesnel olarak tanımlandığı form yapısıdır. <br>
  
  <form [formGroup]="frm" (ngSubmit)="submitForm()">
    <input type="text" placeholder="Name" formControlName="name" ><br>
    <input type="text" placeholder="Surname" formControlName="surname" ><br>
    <input type="text" placeholder="Tel" formControlName="tel" ><br>
    <div formGroupName="address">
    <input type="text" placeholder="Country" formControlName="country" ><br>
    <input type="text" placeholder="City" formControlName="city" ><br>
    <input type="text" placeholder="Postal Code" formControlName="postalCode" ><br>
    </div>
    <button>Send</button>
  </form>
  Valid :{{frm.valid}}
  `
})
export class ModelDrivenFormsComponent {
  frm:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.frm = formBuilder.group({
      name:["Hüseyin",Validators.required],
      surname:["Çoraklı"],
      tel:["",[Validators.required]],
      address:formBuilder.group({
        country:[""],
        city:[""],
        postalCode:[""]
      })
    })

    this.frm.valueChanges.subscribe({
      next:data=>{
        console.log(data)
      }
    })
  }
  
  submitForm(){
    console.log(this.frm.value)
  }
}
