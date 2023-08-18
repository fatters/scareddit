export interface RedditComment {
  id: string;
  body: string;
  body_html: unknown;
  score: number;
  permalink: string;
}

export const MockRedditComment: RedditComment = {
  id: '1',
  body: 'body',
  body_html: 'body',
  score: 500,
  permalink: '/link'
};
