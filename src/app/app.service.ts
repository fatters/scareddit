import { Injectable } from '@angular/core';

declare let snoowrap: any;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private snoowrap: any;

  setSnoowrap(snoowrapConfig: any): void {
    this.snoowrap = new snoowrap(snoowrapConfig);
  }

  getRepliesFromThread(threadId: string): Promise<any> {
    if (this.snoowrap) {
      return this.snoowrap.getSubmission(threadId).expandReplies({limit: 1000, depth: 0});
    }
  }
}
