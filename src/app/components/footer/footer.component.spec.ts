import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getNativeElement } from '../../app.component.spec';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let testSubject: FooterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });

    fixture = TestBed.createComponent(FooterComponent);
    testSubject = fixture.componentInstance;
  });

  describe('render', () => {

    it('contains a link to the github repo', () => {
      // Given
      const someUrl = 'https://github.com/fatters/scareddit';

      // When
      fixture.detectChanges();

      // Then
      expect((getNativeElement(fixture, 'a') as HTMLAnchorElement).href).toEqual(someUrl);
    });

    it('link should open in a new tab', () => {
      // Given
      const someTarget = '_blank';

      // When
      fixture.detectChanges();

      // Then
      expect((getNativeElement(fixture, 'a') as HTMLAnchorElement).target).toEqual(someTarget);
    });

    it('link should have nofollow and noreferrer', () => {
      // Given
      const someRel = 'nofollow noreferrer';

      // When
      fixture.detectChanges();

      // Then
      expect((getNativeElement(fixture, 'a') as HTMLAnchorElement).rel).toEqual(someRel);
    });    
  });
});
