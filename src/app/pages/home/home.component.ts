import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import type { HomePageItem } from 'src/app/models/home-page-item';
import { HomeService } from 'src/app/services/home.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  homePageItems$: Observable<HomePageItem[]>;
  loading = false;

  constructor(private seoService: SeoService, private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.homePageItems$ = this.homeService.getHomePageItems().pipe(
      map((homePageItems) => homePageItems.map((item) => ({ ...item, commentsRead: this.getCommentsRead(item.id) }))),
      tap(() => this.loading = false)
    );

    this.seoService.setTitleAndDescription(
      'Scareddit',
      'A collection of spooky/paranormal threads from Reddit'
    );
  }

  getCommentsRead(threadId: string): number {
    const commentsRead = JSON.parse(localStorage.getItem(threadId)) || [];
    return commentsRead.length;
  }
}
