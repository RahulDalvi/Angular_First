import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleOneCompComponent } from './module-one-comp/module-one-comp.component';



@NgModule({
  declarations: [
    ModuleOneCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModuleOneCompComponent
  ]
})
export class ModuleOneModule { }
