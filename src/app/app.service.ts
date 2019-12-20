import { Injectable } from '@angular/core';

declare let snoowrap: any;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private snoowrap: any;

  setSnoowrap(snoo: any): void {
    this.snoowrap = new snoowrap(snoo);
  }

  getRepliesFromThread(threadId: string): Promise<any> {
    if (this.snoowrap) {
      return this.snoowrap.getSubmission(threadId).expandReplies({limit: 1000, depth: 0});
    }
  }
}
