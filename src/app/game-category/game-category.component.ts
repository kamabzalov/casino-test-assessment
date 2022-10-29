import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getGamesByCategoryId } from '@app/store/app.actions';
import { selectGamesForCategory } from '@app/store/app.selectors';
import { AppState, Game } from '@app/store/state';
import { Store } from '@ngrx/store';
import { interval, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'casino-game-category',
  templateUrl: './game-category.component.html',
  styleUrls: ['./game-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCategoryComponent implements OnInit, OnDestroy {
  protected gamesCategory$: Observable<Game[]> = this.store.select(
    selectGamesForCategory
  );
  private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  public ngOnInit(): void {
    let categoryId: string;

    this.subscription.add(
      this.route.params
        .pipe(
          tap(params => {
            if (params && params['category']) {
              categoryId = params['category'];
            }
          })
        )
        .subscribe(params => {
          if (params && params['category']) {
            this.store.dispatch(
              getGamesByCategoryId({ categoryId: params['category'] })
            );
          }
        })
    );
    this.subscription.add(
      interval(3000).subscribe(_ =>
        this.store.dispatch(getGamesByCategoryId({ categoryId }))
      )
    );
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
