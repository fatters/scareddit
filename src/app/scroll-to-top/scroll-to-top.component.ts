import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('300ms linear')),
      transition(':leave', animate('300ms linear')),
    ])
  ]
})
export class ScrollToTopComponent {
  @Input() showComponent: boolean;

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
