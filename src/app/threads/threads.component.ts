import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RedditThread } from '../_model/thread';
import { SeoService } from '../_common/seo/seo.service';

declare var require: any;

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadsComponent implements OnInit {
  threads: RedditThread[] = require('../../data/threads.json');

  constructor(private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.seoService.setTitleAndDescription(
      'Scareddit',
      'A collection of spooky/paranormal threads from Reddit'
    );
  }

  getCommentsRead(threadId: string): string {
    const commentsRead = JSON.parse(localStorage.getItem(threadId)) || [];
    return `${commentsRead.length} Comments Read`;
  }
}
