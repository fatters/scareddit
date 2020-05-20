import { Component, HostListener, Renderer2 } from '@angular/core';
import { AppService } from './app.service';

const SCROLL_TRIGGER_POINT = 1000;
const SCROLL_CLASS = 'has-scroll-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showScrollToTopComponent: boolean;

  constructor(private renderer: Renderer2,
              private appService: AppService) {
    this.appService.configureSnoowrap();
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
