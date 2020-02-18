import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';

import { MainRoutingModule } from './main-routing.module';
import { CategoryDetailsComponent } from './category-details/category-details.component';


@NgModule({
  declarations: [
    MainComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
