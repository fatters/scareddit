import { THROW_IF_NOT_FOUND } from "@angular/core/src/di/injector";

declare var require: any;

export class AppService {
  private snoowrap: any;

  constructor() {
    console.log('OI!', this.configureSnooWrap());
    this.configureSnooWrap().then((data) => {
      console.log('here?', data);
    })
    const sw = require('snoowrap');
    this.snoowrap = new sw(this.configureSnooWrap());
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
