import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import type { RedditComment } from '../models/reddit-comment';
import type { RedditThread } from '../models/reddit-thread';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  private isProduction = environment.production;
  private badComments = ['[removed]', '[deleted]'];
  private localThreads = new Map<string, RedditThread>();
  private localThreadsMaxSize = 10;

  constructor(private http: HttpClient) {}

  getThreadInformation(threadId: string): Observable<RedditThread> {
    if (!threadId) {
      throw new Error('getThreadInformation requires a "threadId".');
    }

    if (this.localThreads.get(threadId)) {
      return of(this.localThreads.get(threadId));
    } else {
      return this.http.get<RedditThread>(`/functions/reddit-thread?threadId=${threadId}&production=${this.isProduction}`)
        .pipe(tap((thread) => this.setLocalThreads(threadId, thread)));  
    }
  }

  getTruthyAndUnreadComments(comments: RedditComment[], threadId: string): RedditComment[] {
    const commentsRead = JSON.parse(localStorage.getItem(threadId)) || [];
    return comments
      .filter((comment) => this.badComments.indexOf(comment.body) === -1)
      .filter((comment) => commentsRead.indexOf(comment.id) === -1);
  }

  setCommentAsRead(commentId: string, threadId: string): void {
    const commentsRead = JSON.parse(localStorage.getItem(threadId)) || [];
    commentsRead.push(commentId);
    localStorage.setItem(threadId, JSON.stringify(commentsRead));
  }

  setAllCommentsInThreadUnread(threadId: string): void {
    localStorage.removeItem(threadId);
    location.reload();
  }

  private setLocalThreads(threadId: string, thread: RedditThread): void {
    if (this.localThreads.size === this.localThreadsMaxSize) {
      const [keyToRemove] = this.localThreads.keys();
      this.localThreads.delete(keyToRemove);
    }

    this.localThreads.set(threadId, thread);
  }
}
