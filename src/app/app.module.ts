import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentLifeCycleComponent } from './tutorials/component-life-cycle/component-life-cycle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFormsConceptsComponent } from './tutorials/angular-forms-concepts/angular-forms-concepts.component';
import { TemplateDrivenFormsComponent } from './tutorials/angular-forms-concepts/template-driven-forms/template-driven-forms.component';
import { ModelDrivenFormsComponent } from './tutorials/angular-forms-concepts/model-driven-forms/model-driven-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentLifeCycleComponent,
    AngularFormsConceptsComponent,
    TemplateDrivenFormsComponent,
    ModelDrivenFormsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
