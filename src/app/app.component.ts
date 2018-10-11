import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showScrollToTopComponent: boolean;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.showScrollToTopComponent = window.scrollY > 1000;
  }
}
