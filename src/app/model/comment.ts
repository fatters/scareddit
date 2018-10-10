export class RedditComment {

  constructor(public id: string,
              public body: string,
              public score: number,
              public link: string,
              public parent: string) {
  }
}
