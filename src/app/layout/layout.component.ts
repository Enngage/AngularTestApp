import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements AfterViewInit {
  routes: Object[] = [{
    icon: 'library_books',
    route: '/main/a',
    title: 'A',
  }, {
    icon: 'color_lens',
    route: '/main/b',
    title: 'B',
  },
  {
    icon: 'edit',
    route: '/separate/c',
    title: 'C',
  },
  {
    icon: 'list',
    route: '/separate/d',
    title: 'D',
  },
  
  ];

  constructor(private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService) { }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MdSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });
  }

}