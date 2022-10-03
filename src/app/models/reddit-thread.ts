import { RedditComment } from './reddit-comment';

export interface RedditThread {
  id: string;
  title: string;
  comments: RedditComment[];
}
