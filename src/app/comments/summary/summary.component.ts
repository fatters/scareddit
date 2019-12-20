import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RedditComment } from '../../_model/comment';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent {
  @Input() comments: RedditComment[];
  @Input() threadId: string;
  @Output() unread: EventEmitter<void> = new EventEmitter<void>();

  get title(): string {
    return this.comments[0].parent;
  }

  get commentsCount(): string {
    return `${this.comments.length} Unread Comments`;
  }

  get threadLink(): string {
    return `https://redd.it/${this.threadId}`;
  }

  setAllCommentsInThreadUnread(): void {
    this.unread.emit();
  }
}
