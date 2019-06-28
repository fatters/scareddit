declare var require: any;

export class AppService {
  private snoowrap: any;

  setSnoowrap(snoo: any): void {
    const sw = require('snoowrap');
    this.snoowrap = new sw(snoo);
  }

  getRepliesFromThread(threadId: string): Promise<any> {
    if (this.snoowrap) {
      return this.snoowrap.getSubmission(threadId).expandReplies({limit: Infinity, depth: 0});
    }
  }
}
