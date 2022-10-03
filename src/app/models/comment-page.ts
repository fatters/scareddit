import { RedditComment } from './../_model/comment';

export interface CommentPage {
  title: string;
  comments: RedditComment[];
}
