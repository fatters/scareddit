import { LoadingComponent } from './loading.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getNativeElement } from '../../app.component.spec';

describe('LoadingComponent', () => {
  let fixture: ComponentFixture<LoadingComponent>;
  let testSubject: LoadingComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingComponent]
    });

    fixture = TestBed.createComponent(LoadingComponent);
    testSubject = fixture.componentInstance;
  });

  describe('render', () => {

    describe('isLoading is false', () => {

      it('the component is falsy', () => {
        // Given
        testSubject.isLoading = false;

        // When
        fixture.detectChanges();

        // Then
        expect(getNativeElement(fixture, '.loading')).toBeFalsy();
      });
    });

    describe('isLoading is true', () => {

      beforeEach(() => {
        testSubject.isLoading = true;
      });

      it('the component is truthy', () => {
        // When
        fixture.detectChanges();

        // Then
        expect(getNativeElement(fixture, '.loading')).toBeTruthy();
      });

      it('renders the words "Loading Comments...', () => {
        // When
        fixture.detectChanges();

        // Then
        expect(getNativeElement(fixture, '.loading__text').innerHTML).toEqual('Loading Comments...');
      });
    });
  });
});
