import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import {LayoutComponent} from "./layouts.component";
import {RouterModule, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    TopbarComponent,
    RightSidebarComponent
  ],
  exports: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
