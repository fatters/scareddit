import { map, Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { HomePageItem } from 'src/app/models/home-page-item';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  homePageItems$: Observable<HomePageItem[]>;

  constructor(private seoService: SeoService, private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homePageItems$ = this.homeService.getHomePageItems().pipe(
      map((homePageItems) => homePageItems.map((item) => ({ ...item, commentsRead: this.getCommentsRead(item.id) })))
    );

    this.seoService.setTitleAndDescription(
      'Scareddit',
      'A collection of spooky/paranormal threads from Reddit'
    );
  }

  private getCommentsRead(threadId: string): number {
    const commentsRead = JSON.parse(localStorage.getItem(threadId)) || [];
    return commentsRead.length;
  }
}
