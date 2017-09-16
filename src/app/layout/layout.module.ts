import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

// covalent
import { CovalentModule } from '../covalent.module';

// material
import { DemoMaterialModule } from '../material.module';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CovalentModule,
    DemoMaterialModule,
    RouterModule
  ],
  providers: [],
})
export class LayoutModule { }
