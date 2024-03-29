import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockRedditComment } from 'src/app/models/reddit-comment';
import { getNativeElement } from '../../utils/test-utils';
import { ThreadCommentComponent } from './thread-comment.component';

describe('ThreadCommentComponent', () => {
  let testSubject: ThreadCommentComponent;
  let fixture: ComponentFixture<ThreadCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreadCommentComponent]
    });

    fixture = TestBed.createComponent(ThreadCommentComponent);
    testSubject = fixture.componentInstance;

    testSubject.comment = MockRedditComment;

    fixture.detectChanges();
  });

  describe('render', () => {

    it('displays the comments "body_comment"', () => {
      // Then
      expect(getNativeElement(fixture, '.comment__body').innerHTML).toEqual('body');
    });

    it('displays the comments score', () => {
      // Then
      expect(getNativeElement(fixture, '.comment__footer__score').innerHTML).toEqual('Score: 500');
    });

    it('provides a link to the comment on reddit', () => {
      // Then
      expect((getNativeElement(fixture, '.comment__footer__view-thread') as HTMLAnchorElement).href).toEqual('https://reddit.com/link');
    });
  });

  describe('#removeCommentFromList()', () => {

    it('emits remove with the comment id', () => {
      // Given
      spyOn(testSubject.remove, 'emit').and.callFake(() => null);
      const someCommentId = testSubject.comment.id;

      // When
      testSubject.removeCommentFromList();

      // Then
      expect(testSubject.remove.emit).toHaveBeenCalledWith(someCommentId);
    });
  });
});
