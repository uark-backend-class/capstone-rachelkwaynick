import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MainComponent } from './main/main.component';
import { ItemDetailsComponent } from './item-details/item-details.component';


const routes: Routes = [
  // { path: 'main', component: MainComponent }, 
  { path: 'category/:id', component: ItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
