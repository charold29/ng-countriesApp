import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
