import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Game, JackPot } from '@app/store/state';
import { BehaviorSubject, forkJoin, map, Observable, of } from 'rxjs';

const REST_URL = new InjectionToken<string>('REST API URL', {
  factory: () => 'http://stage.whgstage.com/front-end-test/',
});

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private response$: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);

  constructor(
    private http: HttpClient,
    @Inject(REST_URL) private rest: string
  ) {}

  public getAllCategories(): Observable<Game[]> {
    return forkJoin({
      games: this.http.get<Game[]>(`${this.rest}games.php`),
      jackpots: this.getJackpots(),
    }).pipe(
      map(data => {
        if (data.games.length) {
          const jackpots = data.jackpots;
          data.games = data.games.map(game => {
            const jackpotForGame = jackpots.find(item => item.game === game.id);
            if (jackpotForGame) {
              return { ...game, jackpot: jackpotForGame.amount };
            }
            return game;
          });
        }
        this.response$.next(data.games);
        return data.games;
      })
    );
  }

  public getGamesByCategory(category: string): Observable<Game[]> {
    let games: Game[] = this.response$.getValue();
    if (!games.length) {
      return this.getAllCategories().pipe(
        map(games => this.filterGamesByCategory(games, category))
      );
    }
    games = this.filterGamesByCategory(games, category);
    if (!games.length) {
      return of([]);
    }
    return this.updateGamesData(games);
  }

  public getJackpots(): Observable<JackPot[]> {
    return this.http.get<JackPot[]>(`${this.rest}jackpots.php`);
  }

  public updateJackPots(category?: string): Observable<Game[]> {
    let games = this.response$.getValue();
    if (category) {
      games = this.filterGamesByCategory(games, category);
    }
    return this.updateGamesData(games);
  }

  private updateGamesData(games: Game[]): Observable<Game[]> {
    return forkJoin({
      jackPots: this.getJackpots(),
    }).pipe(
      map(data => {
        const jackpots = data.jackPots;
        games = games.map(game => {
          const jackpotForGame = jackpots.find(item => item.game === game.id);
          if (jackpotForGame) {
            return { ...game, jackpot: jackpotForGame.amount };
          }
          return game;
        });
        return games;
      })
    );
  }

  private filterGamesByCategory(games: Game[], category: string): Game[] {
    if (category === 'other') {
      return games.filter(game =>
        game.categories.some((item: string) => {
          if (item === 'ball' || item === 'virtual' || item === 'fun') {
            return item;
          }
          return null;
        })
      );
    }
    return games.filter(game =>
      game.categories.find(item => item === category)
    );
  }
}
