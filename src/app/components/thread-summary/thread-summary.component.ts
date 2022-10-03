
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RedditThread } from 'src/app/models/reddit-thread';

@Component({
  selector: 'app-thread-summary',
  templateUrl: './thread-summary.component.html',
  styleUrls: ['./thread-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadSummaryComponent {
  @Input() thread: RedditThread;
  @Output() unread: EventEmitter<string> = new EventEmitter<string>();

  setAllCommentsInThreadUnread(): void {
    this.unread.emit(this.thread.id);
  }
}
