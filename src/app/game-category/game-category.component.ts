import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, of, Subject, Subscription, tap } from 'rxjs';

@Component({
  selector: 'casino-game-category',
  templateUrl: './game-category.component.html',
  styleUrls: ['./game-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCategoryComponent implements OnInit, OnDestroy {
  // protected gamesCategory$: Observable<State[]> = of([]);
  // private updateJackPotsSubject: Subject<State[]> = new Subject<State[]>();
  // private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    // this.gamesCategory$ = this.updateJackPotsSubject.asObservable();
    // let categoryId: string;
    //
    // this.subscription.add(
    //   this.route.params
    //     .pipe(
    //       tap(params => {
    //         if (params && params['category']) {
    //           categoryId = params['category'];
    //         }
    //       })
    //     )
    //     .subscribe(params => {
    //       if (params && params['category']) {
    //         this.getCategoryGames(params['category']);
    //       }
    //     })
    // );
    // this.subscription.add(
    //   interval(3000).subscribe(_ => this.updateJackPots(categoryId))
    // );
  }

  public ngOnDestroy() {
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }

  // private updateJackPots(category?: string): void {
  //   this.restService
  //     .updateJackPots(category)
  //     .subscribe(data => this.updateJackPotsSubject.next(data));
  // }
  //
  // private getCategoryGames(category: string) {
  //   this.restService
  //     .getGamesByCategory(category)
  //     .subscribe(res => this.updateJackPotsSubject.next(res));
  // }
}
