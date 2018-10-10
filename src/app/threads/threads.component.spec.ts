import { ThreadsComponent } from './threads.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedditThread } from '../model/thread';
import { getDebugElements, getNativeElement } from '../app.component.spec';
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

  const dummyThread = (): RedditThread => {
    return new RedditThread(
      'id',
      'Title',
      'Url'
    );
  };
});
