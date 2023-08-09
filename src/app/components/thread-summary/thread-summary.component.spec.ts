import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { dummyThread, getNativeElement } from 'src/app/app.component.spec';
import { ThreadSummaryComponent } from './thread-summary.component';

describe('ThreadSummaryComponent', () => {
  let testSubject: ThreadSummaryComponent;
  let fixture: ComponentFixture<ThreadSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreadSummaryComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(ThreadSummaryComponent);
    testSubject = fixture.componentInstance;

    testSubject.thread = dummyThread();

    fixture.detectChanges();
  });

  describe('render', () => {

    it('displays the thread title as a h1', () => {
      // Then
      expect(getNativeElement(fixture, 'h1').textContent).toEqual('title');
    });

    it('displays the number of unread comments', () => {
      // Then
      expect(getNativeElement(fixture, '.thread-summary__footer__count').textContent).toEqual('0 Unread Comments');      
    });

    it('provides a link to the thread on reddit', () => {
      // Then
      expect((getNativeElement(fixture, '.thread-summary__footer__view-thread') as HTMLAnchorElement).href).toEqual('https://redd.it/id');
    });    
  });

  describe('#setAllCommentsInThreadUnread()', () => {

    it('emits unread with the thread id', () => {
      // Given
      spyOn(testSubject.unread, 'emit').and.callFake(() => null);

      // When
      testSubject.setAllCommentsInThreadUnread();

      // Then
      expect(testSubject.unread.emit).toHaveBeenCalled();
    });
  });
});
