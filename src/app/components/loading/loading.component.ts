import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'scareddit-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  @Input() isLoading: boolean;
  @Input() text: string;
}
