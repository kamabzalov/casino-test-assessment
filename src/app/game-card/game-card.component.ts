import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Game } from '@app/services/rest/rest.service';

@Component({
  selector: 'casino-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCardComponent {
  @Input() public game: Game;
}
