import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  constructor(private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.seoService.setTitleAndDescription(
      'About | Scareddit',
      'A brief description about the Scareddit site and how to get in contact if you find a mistake/bug'
    );
  }
}
