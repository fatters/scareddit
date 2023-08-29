import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import type { RedditComment } from 'src/app/models/reddit-comment';

@Component({
  selector: 'scareddit-thread-comment',
  templateUrl: './thread-comment.component.html',
  styleUrls: ['./thread-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadCommentComponent {
  @Input() comment: RedditComment;
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  removeCommentFromList(): void {
    this.remove.emit(this.comment.id);
  }
}
