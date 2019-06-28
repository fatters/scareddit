import { THROW_IF_NOT_FOUND } from "@angular/core/src/di/injector";

declare var require: any;

export class AppService {
  private snoowrap: any;

  constructor() {
    const sw = require('snoowrap');
    this.configureSnooWrap().then((data) => {
      console.log('here?', data);
      this.snoowrap = new sw(data.json());
    }); 
  }

  getRepliesFromThread(threadId: string): Promise<any> {
    return this.snoowrap.getSubmission(threadId).expandReplies({limit: Infinity, depth: 0});
  }

  configureSnooWrap(): any {
    return fetch(`/.netlify/functions/return-env`).then((data) => {
      console.log('CONFIGURING SNOOWRAP WITH!', data);
      return data.json();
    }, (err) => {
      console.log('ERR', err);
      return {};
    });
  }
}
