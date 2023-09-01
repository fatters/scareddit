import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getNativeElement, getNativeElements } from '../../utils/test-utils';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let testSubject: HeaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    testSubject = fixture.componentInstance;
  });

  describe('render', () => {

    it('creates a logo with the text "SCAREDDIT"', () => {
      // Given
      const someText = 'SCAREDDIT';

      // When
      fixture.detectChanges();
      
      // Then
      expect(getNativeElement(fixture, '.header__logo').innerText).toEqual(someText);
    });

    it('has one navigation item', () => {
      // Given
      const expectedNavLinkCount = 1;

      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElements(fixture, '.header__navigation__link').length).toEqual(expectedNavLinkCount);
    });

    it('the first links text is "About"', () => {
      // Given
      const expectedLinkText = 'About';

      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElements(fixture, '.header__navigation__link')[0].innerText).toEqual(expectedLinkText);
    });
  });
});
