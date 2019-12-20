import { Component, HostListener, Renderer2 } from '@angular/core';
import { AppService } from './app.service';
import { environment } from '../environments/environment';

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
    if (environment.production) {
      this.configureSnooWrap().then((data) => {
        this.appService.setSnoowrap(data);
      });
    } else {
      this.appService.setSnoowrap(environment.config);
    }
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

  private configureSnooWrap(): any {
    return fetch(`/.netlify/functions/return-env`).then((data) => {
      return data.json();
    }, (err) => {
      return {};
    });
  }
}
