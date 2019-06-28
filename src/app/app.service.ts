declare var require: any;

export class AppService {
  private snoowrap: any;

  constructor() {    
    const sw = require('snoowrap');
    this.snoowrap = new sw(this.configureSnooWrap());
  }

  getRepliesFromThread(threadId: string): Promise<any> {
    return this.snoowrap.getSubmission(threadId).expandReplies({limit: Infinity, depth: 0});
  }

  configureSnooWrap(): any {
    return fetch(`/.netlify/functions/return-env`).then((data) => {
      return data.json();
    });
  }
}
