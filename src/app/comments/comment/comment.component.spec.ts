import { CommentComponent } from './comment.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dummyComment, getNativeElement } from '../../app.component.spec';

describe('CommentComponent', () => {
  let fixture: ComponentFixture<CommentComponent>;
  let testSubject: CommentComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentComponent]
    });

    fixture = TestBed.createComponent(CommentComponent);
    testSubject = fixture.componentInstance;

    testSubject.comment = dummyComment();
  });

  describe('render', () => {

    it('renders the comment body', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElement(fixture, '.comment__body').innerText).toEqual('Body');
    });

    it('renders the score of the post', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElement(fixture, '.comment__footer__score').innerText).toEqual('Score: 500');
    });

    it('renders the "view thread" button', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElement(fixture, '.comment__footer__view-thread')).toBeTruthy();
    });

    it('renders the "read it" button', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElement(fixture, '.comment__footer__read-it')).toBeTruthy();
    });
  });

  describe('#removeCommentFromList()', () => {

    it('emits "remove" with the id of the comment', () => {
      // Given
      spyOn(testSubject.remove, 'emit');

      // When
      testSubject.removeCommentFromList();

      // Then
      expect(testSubject.remove.emit).toHaveBeenCalledWith(testSubject.comment.id);
    });
  });
});
