import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterUserComponent } from './registration/register-user/register-user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './shared/components/category/category.component';
import { ItemComponent } from './shared/components/item/item.component';
import { ItemDetailsComponent } from './shared/components/item-details/item-details.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    WelcomeComponent,
    LoginComponent,
    MainComponent,
    CategoryComponent,
    ItemComponent,
    ItemDetailsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
