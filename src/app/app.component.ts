import { ChangeDetectionStrategy, Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ServiceWorkerService } from './services/service-worker.service';

const SCROLL_TRIGGER_POINT = 1000;
const SCROLL_CLASS = 'has-scroll-component';

@Component({
  selector: 'scareddit-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  showScrollToTopComponent: boolean;

  constructor(private renderer: Renderer2,
              private serviceWorkerService: ServiceWorkerService) {}

  ngOnInit(): void {
    this.serviceWorkerService.start();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > SCROLL_TRIGGER_POINT) {
      this.showScrollToTopComponent = true;
      this.renderer.addClass(document.body, SCROLL_CLASS);
    } else {
      this.showScrollToTopComponent = false;
      this.renderer.removeClass(document.body, SCROLL_CLASS);
    }
  }
}
