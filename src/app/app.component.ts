import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, tap, throttleTime } from 'rxjs';
import { ServiceWorkerService } from './services/service-worker.service';

@Component({
  selector: 'scareddit-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  showScrollToTopComponent: boolean;
  private readonly scrollTriggerPoint = 1000;
  private readonly scrollClass = 'has-scroll-component';
  private readonly scrollThrottleMS = 100;

  constructor(private renderer: Renderer2,
              private serviceWorkerService: ServiceWorkerService,
              private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.serviceWorkerService.start();

    fromEvent(window, 'scroll').pipe(
      throttleTime(this.scrollThrottleMS),
      tap(() => this.handleScrollToTopComponent())
    ).subscribe();
  }

  handleScrollToTopComponent(): void {
    if (window.scrollY > this.scrollTriggerPoint) {
      this.showScrollToTopComponent = true;
      this.renderer.addClass(document.body, this.scrollClass);
    } else {
      this.showScrollToTopComponent = false;
      this.renderer.removeClass(document.body, this.scrollClass);
    }

    this.changeDetector.markForCheck();
  }
}
