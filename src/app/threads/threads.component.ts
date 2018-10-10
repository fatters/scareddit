import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RedditThread } from '../model/thread';

declare var require: any;

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadsComponent {
  threads: RedditThread[] = require('../data/threads.json');
}
