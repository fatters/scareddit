import { ThreadsComponent } from './home.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dummyThread, getDebugElements, getNativeElement } from '../../app.component.spec';
import { RouterTestingModule } from '@angular/router/testing';

describe('ThreadsComponent', () => {
  let fixture: ComponentFixture<ThreadsComponent>;
  let testSubject: ThreadsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreadsComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(ThreadsComponent);
    testSubject = fixture.componentInstance;

    testSubject.threads = [
      dummyThread(),
      dummyThread()
    ];
  });

  describe('render', () => {

    it('lists the number of threads on the page', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(getDebugElements(fixture, '.thread').length).toEqual(2);
    });

    it('renders the title of the thread', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElement(fixture, '.thread__body').innerText).toEqual('Title');
    });
  });

  describe('#getCommentsRead()', () => {

    it('returns 0 if thread does not have entry in local storage', () => {
      // When
      const result = testSubject.getCommentsRead('any id');

      // Then
      expect(result).toEqual('0 Comments Read');
    });

    it('returns the number of items saved to local storage if more than 0', () => {
      // Given
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(['id one', 'id two']));

      // When
      const result = testSubject.getCommentsRead('any id');

      // Then
      expect(result).toEqual('2 Comments Read');
    });
  });
});
