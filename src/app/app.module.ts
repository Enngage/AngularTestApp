import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AComponent } from './components/a.component';
import { BComponent } from './components/b.component';

import { SeparateModule } from './modules/separate.module';
import { LayoutModule } from './layout/layout.module';

// hammer
import 'hammerjs';

// animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { DemoMaterialModule } from './material.module';

// covalent
import { CovalentModule } from './covalent.module';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // custom modules
    LayoutModule,
    SeparateModule,

    // animations
    BrowserAnimationsModule,

    // material
    DemoMaterialModule,

    // covalent
    CovalentModule,

    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent, pathMatch: 'full'
      },
      {
      path: 'main', component: LayoutComponent,  children: [
        { path: 'a', component: AComponent },
        { path: 'b', component: BComponent },
      ]
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
