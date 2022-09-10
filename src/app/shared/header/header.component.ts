import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface MenuItem {
  link: string;
  label: string;
}

export const Menu: MenuItem[] = [
  {
    link: 'top',
    label: 'Top Games',
  },
  {
    link: 'new',
    label: 'New Games',
  },
  {
    link: 'slots',
    label: 'Slots',
  },
  {
    link: 'jackpots',
    label: 'Jackpots',
  },
  {
    link: 'live',
    label: 'Live',
  },
  {
    link: 'blackjack',
    label: 'Blackjack',
  },
  {
    link: 'roulette',
    label: 'Roulette',
  },
  {
    link: 'table',
    label: 'Table',
  },
  {
    link: 'poker',
    label: 'Poker',
  },
  {
    link: 'other',
    label: 'Other',
  },
];

@Component({
  selector: 'casino-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public menu: MenuItem[] = Menu;
}
