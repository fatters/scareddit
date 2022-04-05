import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './_common/header/header.component';
import { By } from '@angular/platform-browser';
import { RedditComment } from './_model/comment';
import { DebugElement } from '@angular/core';
import { RedditThread } from './_model/thread';
import { ScrollToTopComponent } from './_common/scroll-to-top/scroll-to-top.component';
import { AppService } from './app.service';

describe('AppComponent', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ScrollToTopComponent
      ],
      providers: [
        {provide: AppService, useValue: jasmine.createSpyObj('appService', ['setSnoowrap'])}
      ],
      imports: [
        RouterTestingModule
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

export const dummyThread = (): RedditThread => {
  return new RedditThread(
    'id',
    'Title',
    'Url'
  );
};

export const dummyComment = (): RedditComment => {
  return new RedditComment(
    '1',
    'Body',
    500,
    'Link',
    'Parent'
  );
};

export const getNativeElement = (fixture: ComponentFixture<any>, cssClass: string): HTMLElement => {
  const element = fixture.debugElement.query(By.css(cssClass));
  return element ? element.nativeElement : null;
};

export const getDebugElements = (fixture: ComponentFixture<any>, cssClass: string): DebugElement[] => {
  return fixture.debugElement.queryAll(By.css(cssClass));
};
