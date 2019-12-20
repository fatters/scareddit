import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { RedditComment } from '../_model/comment';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../_common/seo/seo.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {
  comments: RedditComment[] = [];
  loading: boolean;
  threadId: string;

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.threadId = this.route.snapshot.params.id;

    this.appService.getRepliesFromThread(this.threadId).then((comments) => {
      this.filterComments(comments);
      this.loading = false;
      this.seoService.setTitleAndDescription(
        `${this.comments[0].parent} | Scareddit`,
        'A collection of spooky/paranormal threads from Reddit'
      );
    });
  }

  removeCommentFromList(index: number, commentId: string): void {
    this.comments.splice(index, 1);
    this.setCommentAsRead(commentId);
  }

  isCommentsEmpty(): boolean {
    return this.comments.length < 1;
  }

  setAllCommentsInThreadUnread(): void {
    localStorage.removeItem(this.threadId);
    location.reload();
  }

  private setCommentAsRead(commentId: string): void {
    const commentsRead = JSON.parse(localStorage.getItem(this.threadId)) || [];
    commentsRead.push(commentId);
    localStorage.setItem(this.threadId, JSON.stringify(commentsRead));
  }

  private filterComments(data: any): void {
    data.comments.forEach((comment) => {
      if (comment.body !== '[removed]' && comment.body !== '[deleted]') {
        const commentsRead = JSON.parse(localStorage.getItem(this.threadId)) || [];
        if (commentsRead.indexOf(comment.id) === -1) {
          this.comments.push(new RedditComment(comment.id, comment.body_html, comment.score, comment.permalink, data.title));
        }
      }
    });
  }
}
