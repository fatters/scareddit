import { RedditComment } from './_model/comment';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CommentPage } from './models/comment-page';

declare let snoowrap: any;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private snoowrap: any;

  constructor(private http: HttpClient) {
  }

  configureSnoowrap(): void {
    if (environment.production) {
      this.getSnoowrapProductionData();
    } else {
      this.getSnoowrapProductionData();
      // this.setSnoowrap(environment.config);
    }
  }

  // setSnoowrap(snoowrapConfig: any): void {
  //   this.whenSnoowrapReady()
  //     .then(() => this.snoowrap = new snoowrap(snoowrapConfig))
  //     .catch(() => new Error('Unable to set snoowrap config.'));
  // }

  getCommentsFromThread(threadId: string): Observable<CommentPage> {
    if (!threadId) {
      throw new Error('getCommentsFromThread requires a "threadId".')
    }
    return this.http.get<CommentPage>(`/.netlify/functions/reddit-thread?threadId=${threadId}`);
  }

  // getRepliesFromThread(threadId: string): Promise<any> {
  //   this.http.get('/.netlify/functions/reddit-comments')
  //   if (this.snoowrap) {
  //     return this.snoowrap.getSubmission(threadId).expandReplies({limit: Infinity, depth: 0});
  //   }
  // }

  private getSnoowrapProductionData(): void {
    this.http.get(`/.netlify/functions/return-env`).pipe(
      take(1),
      map((sw) => {
        console.log('wow', sw);
        this.snoowrap = sw;
      }),
    ).subscribe();
    // this.http.get(`/.netlify/functions/return-env`).pipe(
    //   take(1),
    //   map((snoowrapData) => this.setSnoowrap(snoowrapData)),
    //   catchError((error) => {
    //     console.error('Could not get snoowrap data from Netlify.');
    //     return [error];
    //   })
    // ).subscribe();
  }

  // private whenSnoowrapReady(): Promise<any> {
  //   const win: any = window;
  //   return new Promise((resolve, reject) => {
  //     const maxTries = 20;
  //     let currentTry = 0;
  //     if (win.snoowrap) {
  //       resolve(win.snoowrap);
  //     } else {
  //       const intervalId = setInterval(() => {
  //         currentTry++;
  //         if (win.snoowrap) {
  //           clearInterval(intervalId);
  //           resolve(win.snoowrap);
  //         } else if (currentTry > maxTries) {
  //           clearInterval(intervalId);
  //           reject(new Error('Unable to load snoowrap.'));
  //         }
  //       }, 500);
  //     }
  //   });
  // }
}
