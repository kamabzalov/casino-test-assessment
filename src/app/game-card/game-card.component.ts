import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Game } from '@app/services/rest/rest.service';

@Component({
  selector: 'casino-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCardComponent {
  private _game: Game;

  get game() {
    return this._game;
  }

  @Input()
  public set game(val: Game) {
    if (val) {
      val.showRibbon = this.showRibbon(val);
      this._game = val;
    }
  }

  private showRibbon(val: Game) {
    return val.categories.some(
      category => category === 'top' || category === 'new'
    );
  }
}
