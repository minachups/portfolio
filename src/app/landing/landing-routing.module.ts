import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroComponent} from "./intro/intro.component";
import {EntryComponent} from "./entry/entry.component";

const routes: Routes = [
  {
    path: "",
    component: IntroComponent,
  },
  {
    path: "entry",
    component: EntryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
