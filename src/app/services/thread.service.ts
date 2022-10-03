import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedditComment } from '../models/reddit-comment';
import { RedditThread } from '../models/reddit-thread';


@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(private http: HttpClient) {}

  getThreadInformation(threadId: string): Observable<RedditThread> {
    if (!threadId) {
      throw new Error('getThreadInformation requires a "threadId".');
    }

    return this.http.get<RedditThread>(`/.netlify/functions/reddit-thread?threadId=${threadId}`);
  }

  getTruthyAndUnreadComments(comments: RedditComment[], threadId: string): RedditComment[] {
    const response = [];
    comments.forEach((comment) => {
      if (comment.body !== '[removed]' && comment.body !== '[deleted]') {
        const commentsRead = JSON.parse(localStorage.getItem(threadId)) || [];
        if (commentsRead.indexOf(comment.id) === -1) {
          response.push(comment);
        }
      }
    });
    return response;
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
}
