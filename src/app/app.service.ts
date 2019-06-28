declare var require: any;

export class AppService {
  private snoowrap: any;

  constructor() {
    const config = require('../../config.json');
    const sw = require('snoowrap');

    this.snoowrap = new sw({
      userAgent: process.env.USER_AGENT,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    });
  }

  getRepliesFromThread(threadId: string): Promise<any> {
    return this.snoowrap.getSubmission(threadId).expandReplies({limit: Infinity, depth: 0});
  }
}
