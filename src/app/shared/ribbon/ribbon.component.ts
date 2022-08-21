import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'casino-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RibbonComponent {
  constructor() {}
}
