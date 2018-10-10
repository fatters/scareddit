declare var require: any;

export class AppService {
  private snoowrap: any;

  constructor() {
    const config = require('../../config.json');
    const sw = require('snoowrap');

    this.snoowrap = new sw({
      userAgent: config.userAgent,
      clientId: config.clientId,
      clientSecret: config.clientSecret,
      refreshToken: config.refreshToken
    });
  }

  getRepliesFromThread(threadId: string): Promise<any> {
    return this.snoowrap.getSubmission(threadId).expandReplies({limit: Infinity, depth: 0});
  }
}
