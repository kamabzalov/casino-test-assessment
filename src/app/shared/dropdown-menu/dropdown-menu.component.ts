import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from '@app/shared/header/header.component';

@Component({
  selector: 'casino-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  @Input() public menu: MenuItem[] = [];
}
