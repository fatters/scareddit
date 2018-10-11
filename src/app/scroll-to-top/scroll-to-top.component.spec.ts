import { ScrollToTopComponent } from './scroll-to-top.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getNativeElement } from '../app.component.spec';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ScrollToTopComponent', () => {
  let fixture: ComponentFixture<ScrollToTopComponent>;
  let testSubject: ScrollToTopComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollToTopComponent],
      imports: [NoopAnimationsModule]
    });

    fixture = TestBed.createComponent(ScrollToTopComponent);
    testSubject = fixture.componentInstance;
  });

  describe('render', () => {

    describe('showComponent is false', () => {

      it('the component is falsy', () => {
        // Given
        testSubject.showComponent = false;

        // When
        fixture.detectChanges();

        // Then
        expect(getNativeElement(fixture, '.scroll-to-top')).toBeFalsy();
      });
    });

    describe('showComponent is true', () => {

      beforeEach(() => {
        testSubject.showComponent = true;
      });

      it('the component is truthy', () => {
        // When
        fixture.detectChanges();

        // Then
        expect(getNativeElement(fixture, '.scroll-to-top')).toBeTruthy();
      });
    });
  });
});
