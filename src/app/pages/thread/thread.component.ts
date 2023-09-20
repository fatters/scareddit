import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { SeoService } from 'src/app/services/seo.service';
import type { RedditThread } from './../../models/reddit-thread';
import { ThreadService } from './../../services/thread.service';

@Component({
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadComponent implements OnInit {
  thread$: Observable<RedditThread>;
  threadId: string;
  loading: boolean;

  constructor(private threadService: ThreadService,
              private route: ActivatedRoute,
              private seoService: SeoService,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.threadId = this.route.snapshot.params.id;
    this.updateThread();
  }

  removeCommentFromList(commentId: string): void {
    this.loading = true;
    this.threadService.setCommentAsRead(commentId, this.threadId);
    this.updateThread();
  }

  setAllCommentsInThreadUnread(): void {
    this.threadService.setAllCommentsInThreadUnread(this.threadId);
  }

  private updateThread(): void {
    this.thread$ = this.threadService.getThreadInformation(this.threadId).pipe(
      map((thread) => ({
        id: thread.id,
        title: thread.title,
        comments: this.threadService.getTruthyAndUnreadComments(thread.comments, thread.id)})),
      tap((thread) => {
        this.loading = false;
        this.seoService.setTitleAndDescription(
          `${thread.title} | Scareddit`,
          `A Scareddit thread titled: ${thread.title}`
        );
        this.changeDetector.detectChanges();
      })
    );
  }
}
