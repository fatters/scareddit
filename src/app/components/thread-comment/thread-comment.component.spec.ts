import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dummyComment } from 'src/app/app.component.spec';
import { ThreadCommentComponent } from './thread-comment.component';

describe('ThreadCommentComponent', () => {
  let testSubject: ThreadCommentComponent;
  let fixture: ComponentFixture<ThreadCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreadCommentComponent]
    })

    fixture = TestBed.createComponent(ThreadCommentComponent);
    testSubject = fixture.componentInstance;

    testSubject.comment = dummyComment();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testSubject).toBeTruthy();
  });
});
