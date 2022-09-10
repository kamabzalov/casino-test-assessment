import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Game, RestService } from '@app/services/rest/rest.service';
import {
  interval,
  Observable,
  of,
  Subject,
  Subscription,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'casino-game-categories',
  templateUrl: './game-categories.component.html',
  styleUrls: ['./game-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCategoriesComponent implements OnInit, OnDestroy {
  protected games$: Observable<Game[]> = of([]);
  private updateJackPotsSubject: Subject<Game[]> = new Subject<Game[]>();
  private subscription = new Subscription();

  constructor(private restService: RestService) {}

  public ngOnInit(): void {
    this.games$ = this.updateJackPotsSubject.asObservable();
    this.getAllGames();
    this.subscription = interval(3000).subscribe(_ => this.updateJackPots());
  }

  private updateJackPots(): void {
    this.restService
      .updateJackPots()
      .subscribe(data => this.updateJackPotsSubject.next(data));
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.updateJackPotsSubject.next([]);
    this.updateJackPotsSubject.complete();
  }

  private getAllGames() {
    this.restService
      .getAllCategories()
      .subscribe(res => this.updateJackPotsSubject.next(res));
  }
}
