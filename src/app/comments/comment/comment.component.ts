import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RedditComment} from '../../model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: RedditComment;
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  removeCommentFromList(): void {
    this.remove.emit(this.comment.id);
  }
}

