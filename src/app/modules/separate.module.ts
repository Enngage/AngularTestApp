import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CComponent } from './c.component';
import { DComponent } from './d.component';

// animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// router
import { SeparateRouter } from './separate.routing';

@NgModule({
  declarations: [
    CComponent,
    DComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SeparateRouter
  ],
  providers: [],
})
export class SeparateModule { }
