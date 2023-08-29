import type { RedditComment } from './reddit-comment';

export type RedditThread = {
  id: string;
  title: string;
  comments: RedditComment[];
}

export const MockRedditThread: RedditThread = {
  id: 'id',
  title: 'title',
  comments: []
};
