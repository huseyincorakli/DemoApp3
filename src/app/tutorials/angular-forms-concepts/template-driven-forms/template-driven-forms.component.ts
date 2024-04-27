import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  template: `
    <h3>Template Driven Forms Nedir?</h3>
    Formdaki tüm davranışların ve validasyonların template üzerinde
    directiveleer ve attributelar kullanılarak belirlendiği yaklaşımdır. <br />
    iki direktif kullanılır: <br />
    ngForm: formun kurulmasını sağlayan temel direktifdir. <br />
    ngModel : two way data bind yapmamızı sağlar. <br />
    <h4>ngForm Directive Detayları</h4>
      Form üzerinde bulunan bazı stateleri bize döndürecek propertyler bulunmakta : <br>
      value : her form nesnesinin değerini dönderir <br>
      valid: form geçerli değilse false geçerli ise true dönderir <br>
      touched:kullanıcı form üzerinde en az bir alana girmiş ise true yoksa false <br>
      submitted: form submit edilmiş ise true dönderir <br>
      bu propertlere erişebilmek için ViewChild decorator nesne oluşturmak gerekmektedir <br>
    <h4>Form Kontrollerine ilk değerleri atama işlemi</h4>
    formu temsil ettiğimiz ViewChild nesnesi üzerinden setValue fonskiyonunu kullanarak ilk değerlerini atayabiliriz. <br>
    istenen formcontrolls nesnesine değer atamak istiyorsak frm.controls["controlesName"].setValue(deger) şeklinde atanır. <br>
    formun belirli bir kısmına ait değerleri doldurmak istiyosak form.controls.patchValue( ilkdeger:"...", ikincideger:"..." ) şeklinde atanır. <br>
    formu sıfırlamak için frm.reset(), reserForm() yada onReset() fonksiyonları kullanılabilir.
     <hr />
    <h4>Example</h4>
    <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
      <input type="text" name="name" placeholder="Name" ngModel> <br>
      <input type="text" name="surname" placeholder="Surname" ngModel> <br>
      <select name="job" ngModel>
        <option value="0">Teacher</option>
        <option value="1">Student</option>
        <option value="2">Chef</option>
      </select>
      <div ngModelGroup="address">
      <input type="text" name="country" placeholder="Country" ngModel >
        <input type="text" name="city" placeholder="City" ngModel >
        <input type="text" name="postalCode" placeholder="Postal Code" ngModel >
      </div>
      <button>send</button>
    </form>
  `,
})
export class TemplateDrivenFormsComponent implements OnInit {
  @ViewChild("frm",{static:true}) frm:NgForm
  
  ngOnInit() {
    setTimeout(()=>{
      this.frm.setValue({
      name:"Hüseyin",
      surname:"Çoraklı",
      job:"1",
      address:{
        country:"Türkiye",
        city:"Kahramanmaraş",
        postalCode:"46100"
      }
    })
    }
  ,1)
  }

  
  onSubmit(data) {
    console.log( this.frm.value);
    console.log(this.frm.valid);
    console.log(this.frm.touched);
    console.log(this.frm.submitted);

    
    console.log(data);
    
  }
}
