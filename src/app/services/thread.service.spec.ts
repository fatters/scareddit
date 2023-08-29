import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import type { RedditComment } from '../models/reddit-comment';
import type { RedditThread } from '../models/reddit-thread';
import { ThreadService } from './thread.service';

export class MockThreadService {
  
  getThreadInformation(threadId: string): Observable<RedditThread> {
    return of();
  }

  getTruthyAndUnreadComments(comments: RedditComment[], threadId: string): RedditComment[] {
    return [];
  }

  setCommentAsRead(commentId: string, threadId: string): void {}

  setAllCommentsInThreadUnread(threadId: string): void {}
}

describe('ThreadService', () => {
  let service: ThreadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ThreadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
