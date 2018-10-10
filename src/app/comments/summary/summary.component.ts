import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RedditComment } from '../../model/comment';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent {
  @Input() comments: RedditComment[];
  @Output() unread: EventEmitter<void> = new EventEmitter<void>();

  get title(): string {
    return this.comments[0].parent;
  }

  get commentsCount(): string {
    return `${this.comments.length} Unread Comments`;
  }

  setAllCommentsInThreadUnread(): void {
    this.unread.emit();
  }
}
