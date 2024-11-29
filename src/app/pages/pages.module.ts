import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EntryComponent } from '../landing/entry/entry.component';
import { IntroComponent } from '../landing/intro/intro.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import {LayoutsModule} from "../layouts/layouts.module";


@NgModule({
  declarations: [
  
    HomeComponent,
       AboutComponent,
       ProjectsComponent,
       ContactsComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        LayoutsModule
    ]
})
export class PagesModule { }
