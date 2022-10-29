import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Game } from '@app/store/state';

@Component({
  selector: 'casino-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCardComponent {
  private _game: Game;

  public get game() {
    return this._game;
  }

  @Input()
  public set game(val: Game) {
    if (val) {
      const showRibbon = this.showRibbon(val);
      val = { ...val, showRibbon };
      this._game = val;
    }
  }

  private showRibbon(val: Game) {
    return val.categories.some(
      category => category === 'top' || category === 'new'
    );
  }
}
