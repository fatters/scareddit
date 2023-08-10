import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { HomePageItem } from './models/home-page-item';
import { RedditComment } from './models/reddit-comment';
import { RedditThread } from './models/reddit-thread';
import { ServiceWorkerService } from './services/service-worker.service';
import { MockServiceWorkerService } from './services/service-worker.service.spec';

describe('AppComponent', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ScrollToTopComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: ServiceWorkerService, useClass: MockServiceWorkerService }
      ]
    });
  }));

  it('should create the app', waitForAsync(() => {
    // Given
    const fixture = TestBed.createComponent(AppComponent);

    // When
    const app = fixture.debugElement.componentInstance;

    // Then
    expect(app).toBeTruthy();
  }));
});

export const dummyHomePageItem = (): HomePageItem => {
  return {
    id: '1',
    title: 'title',
    url: 'url',
    commentsRead: 0
  };
};

export const dummyThread = (): RedditThread => {
  return {
    id: 'id',
    title: 'title',
    comments: []
  };
};

export const dummyComment = (): RedditComment => {
  return {
    id: '1',
    body: 'body',
    body_html: 'body',
    score: 500,
    permalink: '/link'
  };
};

export const getNativeElement = (fixture: ComponentFixture<any>, cssClass: string): HTMLElement => {
  const element = fixture.debugElement.query(By.css(cssClass));
  return element ? element.nativeElement : null;
};

export const getDebugElements = (fixture: ComponentFixture<any>, cssClass: string): DebugElement[] => {
  return fixture.debugElement.queryAll(By.css(cssClass));
};
