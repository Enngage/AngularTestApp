import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { LayoutComponent } from '../layout/layout.component';
import { CComponent } from './c.component';
import { DComponent } from './d.component';

import { AppComponent } from '../app.component';

const routes: Routes = [
  {
    path: 'separate', component: LayoutComponent,  children: [
      { path: 'c', component: CComponent },
      { path: 'd', component: DComponent },
    ]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SeparateRouter { }