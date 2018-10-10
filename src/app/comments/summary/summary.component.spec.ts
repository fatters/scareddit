import { SummaryComponent } from './summary.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dummyComment, getNativeElement } from '../../app.component.spec';
import { RouterTestingModule } from '@angular/router/testing';

describe('SummaryComponent', () => {
  let fixture: ComponentFixture<SummaryComponent>;
  let testSubject: SummaryComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(SummaryComponent);
    testSubject = fixture.componentInstance;

    testSubject.comments = [
      dummyComment(),
      dummyComment()
    ];
    testSubject.threadId = 'id';
  });

  describe('render', () => {

    it('renders the thread title', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElement(fixture, '.thread-summary__title').innerHTML).toEqual('Parent');
    });
  });

  describe('#title()', () => {

    it('gets the first comments parent title', () => {
      // When
      const result = testSubject.title;

      // Then
      expect(result).toEqual('Parent');
    });
  });

  describe('#commentsCount()', () => {

    it('returns the string "X Unread Comments', () => {
      // When
      const result = testSubject.commentsCount;

      // Then
      expect(result).toEqual('2 Unread Comments');
    });
  });

  describe('#threadLink()', () => {

    it('returns a reddit link with the thread id', () => {
      // When
      const result = testSubject.threadLink;

      // Then
      expect(result).toEqual('https://redd.it/id');
    });
  });

  describe('#setAllCommentsInThreadUnread()', () => {

    it('unread emits with void', () => {
      // Given
      spyOn(testSubject.unread, 'emit');

      // When
      testSubject.setAllCommentsInThreadUnread();

      // Then
      expect(testSubject.unread.emit).toHaveBeenCalled();
    });
  });
});
