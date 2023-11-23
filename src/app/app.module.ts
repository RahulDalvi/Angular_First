import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleOneModule } from './module-one/module-one.module';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { CompwithstyleComponent } from './compwithstyle/compwithstyle.component';
import { CompwithtempletComponent } from './compwithtemplet/compwithtemplet.component';
import { CompwithbothComponent } from './compwithboth/compwithboth.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    CompwithstyleComponent,
    CompwithtempletComponent,
    CompwithbothComponent,
    HeaderComponent,
 

  ],
  imports: [
    BrowserModule,
    ModuleOneModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
