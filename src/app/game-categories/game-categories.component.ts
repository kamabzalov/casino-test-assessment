import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { getAll } from '@app/store/app.actions';
import { selectGamesList } from '@app/store/app.selectors';
import { AppState, Game } from '@app/store/state';
import { Store } from '@ngrx/store';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'casino-game-categories',
  templateUrl: './game-categories.component.html',
  styleUrls: ['./game-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCategoriesComponent implements OnInit, OnDestroy {
  protected games$: Observable<Game[]> = this.store.select(selectGamesList);
  private subscription = new Subscription();

  constructor(private readonly store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(getAll());
    this.subscription = interval(3000).subscribe(_ =>
      this.store.dispatch(getAll())
    );
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
