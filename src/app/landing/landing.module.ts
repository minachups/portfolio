import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import {IntroComponent} from "./intro/intro.component";
import {EntryComponent} from "./entry/entry.component";


@NgModule({
  declarations: [
      IntroComponent,
      EntryComponent,
  ],
  imports: [

    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
