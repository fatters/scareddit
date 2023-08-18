import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getNativeElement } from '../../utils/test-utils';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;
  let testSubject: AboutComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(AboutComponent);
    testSubject = fixture.componentInstance;
  });

  describe('render', () => {

    it('renders the component', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(testSubject).toBeTruthy();
    });

    it('sets h1 as "About Scareddit"', () => {
      // Given
      const someTitle = 'About Scareddit';

      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElement(fixture, 'h1').innerText).toEqual(someTitle);
    });
  });
});
