import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from '@app/shared/header/header.component';

@Component({
  selector: 'casino-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Input() public menu: MenuItem[] = [];
}
