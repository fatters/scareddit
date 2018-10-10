import {TestBed, async, ComponentFixture} from "@angular/core/testing";
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {HeaderComponent} from './header/header.component';
import {By} from "@angular/platform-browser";
import {RedditComment} from "./model/comment";
import {DebugElement} from "@angular/core";

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

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
