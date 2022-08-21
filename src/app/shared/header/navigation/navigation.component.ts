import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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

interface MenuItem {
  link: string;
  label: string;
}

@Component({
  selector: 'casino-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public menu = Menu;
}
