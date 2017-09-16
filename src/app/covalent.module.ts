import { NgModule } from '@angular/core';
import { CovalentLayoutModule, CovalentStepsModule, CovalentMediaModule /*, any other modules */ } from '@covalent/core';

@NgModule({
  exports: [
    CovalentLayoutModule, CovalentMediaModule, CovalentStepsModule
  ]
})
export class CovalentModule { }